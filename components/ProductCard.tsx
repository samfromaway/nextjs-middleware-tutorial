import Image from 'next/image';

type ProductCardProps = {
  title: string;
  category: string;
  price: number;
  image: string;
};

const defaultProps = {};

const ProductCard = ({ title, category, price, image }: ProductCardProps) => {
  return (
    <div
      style={{
        margin: 10,
        border: 'solid white 1px',
        width: '100%',
        maxWidth: 400,
      }}
    >
      <Image src={image} width={80} height={80} alt={title} />

      <h3>{title}</h3>
      <h3>{category}</h3>
      <h3>{price}</h3>
    </div>
  );
};

ProductCard.defaultProps = defaultProps;

export default ProductCard;
