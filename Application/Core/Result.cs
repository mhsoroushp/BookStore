using System;
using System.Collections.Generic;

namespace Application.Core;

public class Result<T>
{
    public bool IsSuccess { get; set; }
    public T? Value { get; set; }
    public string? Error { get; set; }
    public int Code { get; set; }
    public Dictionary<string, string[]>? ValidationErrors { get; set; }

    public static Result<T> Success(T value) => new()
    {
        IsSuccess = true,
        Value = value,
        Code = 200
    };

    public static Result<T> Success() => new()
    {
        IsSuccess = true,
        Code = 200
    };

    public static Result<T> Failure(string error, int code) => new()
    {
        IsSuccess = false, 
        Error = error,
        Code = code
    };

    public static Result<T> ValidationFailure(Dictionary<string, string[]> errors) => new()
    {
        IsSuccess = false,
        Error = "Validation failed",
        Code = 400,
        ValidationErrors = errors
    };
}