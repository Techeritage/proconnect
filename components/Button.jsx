import clsx from "clsx";
import Link from "next/link";

const Button = ({ cta, link, action, icon, className, ref }) => {
  return (
    <button
      ref={ref}
      className={clsx(
        "group h-[48px] rounded-full px-5 font-semibold tracking-wider",
        className
      )}
      onClick={action && action}
    >
      {link ? (
        <Link href={link} className="myFlex">
          <span className="relative inline-flex overflow-hidden">
            <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:translate-y-[-177%] group-hover:skew-y-12">
              {cta}
            </div>
            <div className="absolute translate-y-[174%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
              {cta}
            </div>
          </span>{" "}
          {icon && <span className="ml-2">{icon}</span>}
        </Link>
      ) : (
        <div className="myFlex">
          <span className="relative inline-flex overflow-hidden">
            <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:translate-y-[-177%] group-hover:skew-y-12">
              {cta}
            </div>
            <div className="absolute translate-y-[174%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
              {cta}
            </div>
          </span>
          {icon && <span className="ml-1">{icon}</span>}
        </div>
      )}
    </button>
  );
};

export default Button;
