namespace API.DTO;

//DTO yani Data Transfer Object servisten dönen response verisinin özelleştirilmesi için yapılır. Bir üründe tüm bilgilerin dönmesine gerek yoksa dönmesini istediğimiz alanları belirleyerek kullanabliriz.
public class CartDTO
{
    public int CartId { get; set; }
    public string? CustomerId { get; set; } = null!;
    public List<CartItemDTO> CartItems { get; set; } = new();
}

public class CartItemDTO
{
    public int ProductId { get; set; }
    public string? Name { get; set; }
    public decimal Price { get; set; }
    public string? ImageUrl { get; set; }
    public int Quantity { get; set; }
    
}