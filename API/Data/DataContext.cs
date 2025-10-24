using API.Entity;
using Microsoft.EntityFrameworkCore;

namespace API.Data;
public class DataContext: DbContext
{
    public DbSet<Product> Products => Set<Product>(); //arrow function ile referans verip null olmamasını sağlıyoruz.
}
