# Stage 1: Build React frontend
FROM node:24-alpine AS react-builder

WORKDIR /app

# Copy all client files first
COPY client/ ./client/

WORKDIR /app/client
RUN npm install
RUN npm run build

# Stage 2: Build .NET backend
FROM mcr.microsoft.com/dotnet/sdk:10.0 AS dotnet-builder

WORKDIR /app

# Copy solution and project files
COPY BookStore.slnx .
COPY API/ ./API/
COPY Application/ ./Application/
COPY Domain/ ./Domain/
COPY Persistence/ ./Persistence/

# Create wwwroot directory if it doesn't exist
RUN mkdir -p ./API/wwwroot

# Copy React build output to wwwroot
COPY --from=react-builder /app/client/dist ./API/wwwroot

# Restore and build
RUN dotnet restore
RUN dotnet build -c Release --no-restore
RUN dotnet publish API/API.csproj -c Release -o /app/publish --no-build

# Stage 3: Runtime
FROM mcr.microsoft.com/dotnet/aspnet:10.0

WORKDIR /app

# Copy published app from builder
COPY --from=dotnet-builder /app/publish .

# Expose port
EXPOSE 80

# Set environment for production
ENV ASPNETCORE_ENVIRONMENT=Production
ENV ASPNETCORE_URLS=http://+:80

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD dotnet-monitor collect -n 1 2>/dev/null || exit 1

# Run the app
ENTRYPOINT ["dotnet", "API.dll"]
