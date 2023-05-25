import Image from "next/image";
import Link from "next/link";
import { FaRegHeart } from "react-icons/fa";
import styls from "../header/index.module.css";
const ContestCard = ({ itm }) => {
  return (
    <div className="contest-card">
      <Link href="" className="item-link"></Link>
      <div className="contest-card__thumb">
        <Image src={itm.img} alt={itm.title} />
        <a href="#0" className="action-icon">
          <FaRegHeart />
        </a>
        <div className="contest-num d-flex flex-column mb-3 text-center">
          <span>@</span>
          <h4 className={`number ${styls.size}`}>{itm.contest_no} MC</h4>
        </div>
      </div>
      <div className="pt-5 pb-4 text-center">
        <div className=" text-center">
          <h5 className="contest-card__name ">{itm.title}</h5>
        </div>
        {/*} <div className="right">
          <span className="contest-card__price">${itm.ticket_price}</span>
          <p>ticket price</p>
        </div>*/}
      </div>
      {/*} <div className="contest-card__footer">
        <ul className="contest-card__meta">
          <li>
            <i className="las la-clock"></i>
            <span>{itm.day_remain}d</span>
          </li>
          <li>
            <i className="las la-ticket-alt"></i>
            <span>{itm.ticket_remain}</span>
            <p>Remaining</p>
          </li>
        </ul>
      </div>*/}
    </div>
  );
};

export default ContestCard;
