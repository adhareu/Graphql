namespace WebApp.Data
{
    using Microsoft.EntityFrameworkCore;
    using WebApp.Models;

    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<Book> Books { get; set; }
    }
}
