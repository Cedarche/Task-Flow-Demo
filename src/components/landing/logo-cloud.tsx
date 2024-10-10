import { clsx } from "clsx";

const companies = [
  { name: "Snap Park", img: "./logo-cloud/Snappark_icon.png" },
  { name: "Ream", img: "/logo-cloud/Ream_icon.png" },
  { name: "Cross Copy", img: "/logo-cloud/Crosscopy_icon_light.png" },
  { name: "Assetrix", img: "/logo-cloud/Assetrix_icon.png" },
  { name: "", img: "/logo-cloud/transistor.svg" },
];

const Logo = ({ company }: { company: { name: string; img: string } }) => {
  return (
    <div className="overflow-hidden inline-flex gap-x-3 items-center" key={company.name}>
      <img
        alt={company.name}
        src={company.img}
        className={clsx( " grayscale h-9 max-sm:mx-auto sm:h-8 lg:h-12  ", company.name != "" && ("border border-gray-200 rounded-xl"))}
      />
      <h2 className="text-xl font-semibold font-display">{company.name}</h2>
    </div>
  );
};

export function LogoCloud({
  className,
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={clsx(
        className,
        "flex justify-between max-sm:mx-auto max-sm:max-w-md max-sm:flex-wrap max-sm:justify-evenly max-sm:gap-x-4 max-sm:gap-y-4"
      )}
    >
      {companies.map((company, i) => (
        <Logo company={company} key={company.name} />
      ))}
    </div>
  );
}
