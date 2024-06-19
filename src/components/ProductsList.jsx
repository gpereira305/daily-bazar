import { Link, useLoaderData } from "react-router-dom";
import { formatPrice } from "../utils";

export default function ProductsList() {
  const { products } = useLoaderData();

  return (
    <div
      className="main-container pt-12 grid gap-y-8"
      style={{ paddingTop: "30px", paddingBottom: "30px" }}
    >
      {products?.map(({ id, attributes: { title, price, image, company } }) => (
        <Link
          className="card flex min-[480px]:flex-row flex-col w-full shadow-xl"
          key={id}
          to={`/products/${id}`}
        >
          <figure className="w-full min-[480px]:w-[200px] min-w-[200px] h-[30dvh] min-[480px]:h-[200px] min-h-[200px] overflow-hidden rounded-md">
            <img
              src={image}
              alt={title}
              className="object-cover w-[inherit] min-w-[inherit] h-[inherit] min-h-[inherit] hover:scale-[1.25] transition duration-700"
            />
          </figure>

          <div className="flex flex-col md:flex-row justify-between items-start w-full min-[480px]:py-2 py-5 min-[480px]:px-5 px-2">
            <div className=" ">
              <h3 className="uppercase ext-base-content font-semibold text-lg">
                {title}
              </h3>
              <h4 className="capitalize font-semibold text-md text-base-content">
                {company}
              </h4>
            </div>

            <p className="font-semibold text-xl">{formatPrice(price)}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
