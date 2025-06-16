using WebApp.Data;
using WebApp.Models;
using HotChocolate.Authorization;
using Microsoft.AspNetCore.Cors;
namespace WebApp.Graphql
{
    public class Mutation
    {
        [EnableCors("CorsPolicy")]
        [Authorize] //
        public async Task<Book> AddBookAsync(string title, string author, [Service] AppDbContext context)
        {
            var book = new Book { Title = title, Author = author };
            context.Books.Add(book);
            await context.SaveChangesAsync();
            return book;
        }

        [Authorize] //
        public async Task<Book> UpdateBookAsync(int id, string title, string author, [Service] AppDbContext context)
        {
            var book = await context.Books.FindAsync(id);
            if (book == null) return null;
            book.Title = title;
            book.Author = author;
            await context.SaveChangesAsync();
            return book;
        }

        [Authorize] //
        public async Task<bool> DeleteBookAsync(int id, [Service] AppDbContext context)
        {
            var book = await context.Books.FindAsync(id);
            if (book == null) return false;
            context.Books.Remove(book);
            await context.SaveChangesAsync();
            return true;
        }
    }
}
