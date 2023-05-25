import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import winnerData from "../../data/winnerData";
import TicketCheckCard from "../cards/TicketCheckCard";
import WinnerCard from "../cards/WinnerCard";
import w_el_1 from "/public/images/elements/w-el-1.png";
import w_el_2 from "/public/images/elements/w-el-2.png";
import w_el_3 from "/public/images/elements/w-el-3.png";
import winner_tab_1 from "/public/images/icon/winner-tab/1.png";
import winner_tab_2 from "/public/images/icon/winner-tab/2.png";
import winner_tab_3 from "/public/images/icon/winner-tab/3.png";
import winner_tab_4 from "/public/images/icon/winner-tab/4.png";
import winner_tab_5 from "/public/images/icon/winner-tab/5.png";
import styls from "../header/index.module.css";
const LatestWinner = () => {
  const [winners, setWinners] = useState(winnerData);

  return (
    <>
      <section className="roadmap p-y-100" id="roadmap">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center section-header">
              <h2 className="section-title">Roadmap</h2>
              <p>
                All jokes aside, here is a rough sketch of Ferrari Car ahead. We
                dont was not to give everything away on day 1, Expect surprises
                along the way ;
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3">
              <div className={`play-card--one ${styls.anumber}`}>
                <h2>Phase 1</h2>
                <ul className={`${styls.ULS}`}>
                  <li>Socials Creation</li>
                  <li>Stealth Launch</li>
                  <li>CMC and CG</li>
                  <li>Global Marketing Campaign</li>
                  <li>Social Media Ads Campaign</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              <div className={`play-card--one ${styls.anumber}`}>
                <h2>Phase 2</h2>
                <ul className={`${styls.ULS}`}>
                  <li>Twitter Campaign Trending</li>

                  <li>
                    Beta phase in the platform, with staking, yield farming,
                    DAOgovernance
                  </li>
                  <li>Copytrader Statistical Analysis</li>
                  <li>Test phase of the Dapp</li>
                  <li>Cex Listings </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              <div className={`play-card--one ${styls.anumber}`}>
                <h2>Phase 3</h2>
                <ul className={`${styls.ULS}`}>
                  <li>Press Releases and Billboard </li>
                  <li>Partnerships with VC</li>
                  <li>LunarCrush Listing</li>
                  <li>T1 Cex Listing </li>
                  <li>Reach 10,000 Holders </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              <div className={`play-card--one ${styls.anumber}`}>
                <h2>Phase 4</h2>
                <ul className={`${styls.ULS}`}>
                  <li>Sponsorship and Partnership Worldwide</li>
                  <li>Ferrari Car</li>
                  <li>p2e Game development </li>
                  <li>Paid Marketing and Media Campaign</li>
                  <li>All features released</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="latest-winner-section position-relative pt-120 pb-120">
      <div className="el-1">
        <Image src={w_el_1} alt="image" />
      </div>
      <div className="el-2">
        <Image src={w_el_2} alt="image" />
      </div>
      <div className="el-3">
        <Image src={w_el_3} alt="image" />
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-header text-center">
              <span className="section-sub-title">
                Meet the latest winners from your favorite contest
              </span>
              <h2 className="section-title">Latest Winners</h2>
              <p>
                Check your ticket number&#39;s to see if you are a Winner in the
                Dream Lottery.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <ul
              className="nav nav-tabs winner-tab-nav"
              id="winnerTab"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="dream-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#dream"
                  role="tab"
                  aria-controls="dream"
                  aria-selected="true"
                >
                  <span className="icon-thumb">
                    <Image src={winner_tab_1} alt="image" />
                  </span>
                  <span>Dream Car</span>
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="bike-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#bike"
                  role="tab"
                  aria-controls="bike"
                  aria-selected="false"
                >
                  <span className="icon-thumb">
                    <Image src={winner_tab_2} alt="image" />
                  </span>
                  <span>bike</span>
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="watch-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#watch"
                  role="tab"
                  aria-controls="watch"
                  aria-selected="false"
                >
                  <span className="icon-thumb">
                    <Image src={winner_tab_3} alt="image" />
                  </span>
                  <span>watch</span>
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="laptop-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#laptop"
                  role="tab"
                  aria-controls="laptop"
                  aria-selected="false"
                >
                  <span className="icon-thumb">
                    <Image src={winner_tab_4} alt="image" />
                  </span>
                  <span>laptop</span>
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="money-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#money"
                  role="tab"
                  aria-controls="money"
                  aria-selected="false"
                >
                  <span className="icon-thumb">
                    <Image src={winner_tab_5} alt="image" />
                  </span>
                  <span>Money</span>
                </button>
              </li>
            </ul>
            <div className="tab-content mt-50" id="winnerTabContent">
              <div
                className="tab-pane fade show active"
                id="dream"
                role="tabpanel"
                aria-labelledby="dream-tab"
              >
                <div className="row mb-none-30">
                  <div className="col-lg-4 mb-30">
                   
                    <TicketCheckCard />
                  </div>
                  <div className="col-lg-8 mb-30">
                   

                    {winners.map((winner) => (
                      <WinnerCard key={winner.id} winner={winner} />
                    ))}

                    <div className="btn-grp">
                      <Link href="winner" className="btn-border">
                        browse more
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="tab-pane fade"
                id="bike"
                role="tabpanel"
                aria-labelledby="bike-tab"
              >
                <div className="row mb-none-30">
                  <div className="col-lg-4 mb-30">
                   
                    <TicketCheckCard />
                  </div>
                  <div className="col-lg-8 mb-30">
                   

                    {winners.map((winner) => (
                      <WinnerCard key={winner.id} winner={winner} />
                    ))}

                    <div className="btn-grp">
                      <Link href="winner" className="btn-border">
                        browse more
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="tab-pane fade"
                id="watch"
                role="tabpanel"
                aria-labelledby="watch-tab"
              >
                <div className="row mb-none-30">
                  <div className="col-lg-4 mb-30">
                  
                    <TicketCheckCard />
                  </div>
                  <div className="col-lg-8 mb-30">
                  
                    {winners.map((winner) => (
                      <WinnerCard key={winner.id} winner={winner} />
                    ))}

                    <div className="btn-grp">
                      <Link href="/winner" className="btn-border">
                        browse more
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="tab-pane fade"
                id="laptop"
                role="tabpanel"
                aria-labelledby="laptop-tab"
              >
                <div className="row mb-none-30">
                  <div className="col-lg-4 mb-30">
                  
                    <TicketCheckCard />
                  </div>
                  <div className="col-lg-8 mb-30">
                   

                    {winners.map((winner) => (
                      <WinnerCard key={winner.id} winner={winner} />
                    ))}

                    <div className="btn-grp">
                      <Link href="winner" className="btn-border">
                        browse more
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="tab-pane fade"
                id="money"
                role="tabpanel"
                aria-labelledby="money-tab"
              >
                <div className="row mb-none-30">
                  <div className="col-lg-4 mb-30">
                   
                    <TicketCheckCard />
                  </div>
                  <div className="col-lg-8 mb-30">
                   
                    {winners.map((winner) => (
                      <WinnerCard key={winner.id} winner={winner} />
                    ))}

                    <div className="btn-grp">
                      <Link href="/winner" className="btn-border">
                        browse more
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>*/}
    </>
  );
};

export default LatestWinner;
