using HotChocolate.Authorization;
using Microsoft.AspNetCore.Cors;
using WebApp.Data;
using WebApp.Models;

namespace WebApp.Graphql
{
    public class Query
    {
        [EnableCors("CorsPolicy")]
        [Authorize] //
        public IQueryable<Book> GetBooks([Service] AppDbContext context) =>
            context.Books;
    }
}
