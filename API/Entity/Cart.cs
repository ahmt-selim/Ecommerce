namespace API.Entity;

public class Cart
{
    public int CartId { get; set; }
    public string CustomerId { get; set; } = null!; //db'de null olmayan bir alan olarak ouşturulur.
    public List<CartItem> CartItems { get; set; } = new(); // new() = yeni bir cart oluşturulduğunda null olmaması için eklenir. Her cart oluşturulduğunda item eklemeden newlememek için buraya eklendi. 

}

public class CartItem
{
    public int CartItemId { get; set; }
    public int ProductId { get; set; }
    public Product Product { get; set; } = null!;
    public int CartId { get; set; }
    public Cart Cart { get; set; } = null!;
    public int Quantity { get; set; }
}