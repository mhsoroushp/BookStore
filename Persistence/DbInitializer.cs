using Domain;

namespace Persistence;

public class DbInitializer
{
    private readonly AppDbContext _context;

    public DbInitializer(AppDbContext context)
    {
        _context = context;
    }

    public void DataSeed()
    {
        // Check if to avoid seeding already seeded database
        if (_context.Books.Any()) return;

        var books = new List<Book>
        {
            new Book
            {
                Title = "The Great Gatsby",
                Author = "F. Scott Fitzgerald",
                Price = 10,
                Description = "A novel set in the Roaring Twenties that explores themes of wealth, love, and the American Dream.",
            },
            new ()
            {
                Title = "To Kill a Mockingbird",
                Author = "Harper Lee",
                Price = 12,
                Description = "A powerful story of racial injustice and moral growth in the Deep South during the 1930s."
            },
            new() 
            {
                Title = "1984",
                Author = "George Orwell",
                Price = 15,
                Description = "A dystopian novel that explores the dangers of totalitarianism and extreme political ideology."
            }
        };

        _context.Books.AddRange(books);
        _context.SaveChanges();
    }
}
