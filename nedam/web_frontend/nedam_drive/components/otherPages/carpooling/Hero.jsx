import PlacePicker from "@/components/common/PlacePicker";
import DatePickerComponent from "@/components/common/DatePicker";
import TimePickerComponent from "@/components/common/TimePicker";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="section banner-carpooling bg-2 pt-150 pb-160 banner-carpooling">
      <div className="container-sub">
        <div className="box-banner-homepage-4">
          <p className="text-16 color-text wow fadeInUp">
            Where Would You Like To Go?
          </p>
          <h1 className="heading-52-medium color-text mb-30 wow fadeInUp">
            Nedam Carpooling,
          </h1>
          <h1 className="heading-52-large color-text mb-30 wow fadeInUp">
            Your best carpool partner !
          </h1>
        </div>
      </div>

      {/* #####################################################################################
      ######################################################################################### */}

      <div className="box-search-ride box-search-ride-style-2 light-input">
        <div className="box-search-tabs wow fadeInUp">
          <div className="head-tabs">
            <ul className="nav nav-tabs nav-tabs-search" role="tablist">
              <li>
                <a
                  className="active"
                  href="#tab-distance"
                  data-bs-toggle="tab"
                  role="tab"
                  aria-controls="tab-distance"
                  aria-selected="true"
                >
                  Distance
                </a>
              </li>
              <li>
                <a
                  href="#tab-hourly"
                  data-bs-toggle="tab"
                  role="tab"
                  aria-controls="tab-hourly"
                  aria-selected="false"
                >
                  Hourly
                </a>
              </li>
              <li>
                <a
                  href="#tab-rate"
                  data-bs-toggle="tab"
                  role="tab"
                  aria-controls="tab-rate"
                  aria-selected="false"
                >
                  Flat Rate
                </a>
              </li>
            </ul>
          </div>
          <div className="tab-content">
            <div
              className="tab-pane fade active show"
              id="tab-distance"
              role="tabpanel"
              aria-labelledby="tab-distance"
            >
              <div className="box-form-search">
                <div className="search-item search-date">
                  <div className="search-icon">
                    <span className="item-icon icon-date"> </span>
                  </div>
                  <div className="search-inputs">
                    <label className="text-14 color-grey">Date</label>
                    <DatePickerComponent />
                  </div>
                </div>
                <div className="search-item search-time">
                  <div className="search-icon">
                    <span className="item-icon icon-time"> </span>
                  </div>
                  <div className="search-inputs">
                    <label className="text-14 color-grey">Time</label>
                    <TimePickerComponent />
                  </div>
                </div>
                <div className="search-item search-from">
                  <div className="search-icon">
                    <span className="item-icon icon-from"> </span>
                  </div>
                  <div className="search-inputs">
                    <label className="text-14 color-grey">From</label>
                    <PlacePicker />
                  </div>
                </div>
                <div className="search-item search-to">
                  <div className="search-icon">
                    <span className="item-icon icon-to"> </span>
                  </div>
                  <div className="search-inputs">
                    <label className="text-14 color-grey">To</label>
                    <PlacePicker />
                  </div>
                </div>
                <div className="search-item search-button mb-0">
                  <button className="btn btn-search" type="submit">
                    <Image
                      width={20}
                      height={20}
                      src="/assets/imgs/template/icons/search.svg"
                      alt="luxride"
                    />
                    Search
                  </button>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="tab-hourly"
              role="tabpanel"
              aria-labelledby="tab-hourly"
            >
              <div className="box-form-search">
                <div className="search-item search-time">
                  <div className="search-icon">
                    <span className="item-icon icon-time"> </span>
                  </div>
                  <div className="search-inputs">
                    <label className="text-14 color-grey">Time</label>
                    <TimePickerComponent />
                  </div>
                </div>
                <div className="search-item search-date">
                  <div className="search-icon">
                    <span className="item-icon icon-date"> </span>
                  </div>
                  <div className="search-inputs">
                    <label className="text-14 color-grey">Date</label>
                    <DatePickerComponent />
                  </div>
                </div>
                <div className="search-item search-from">
                  <div className="search-icon">
                    <span className="item-icon icon-from"> </span>
                  </div>
                  <div className="search-inputs">
                    <label className="text-14 color-grey">From</label>
                    <PlacePicker />
                  </div>
                </div>
                <div className="search-item search-to">
                  <div className="search-icon">
                    <span className="item-icon icon-to"> </span>
                  </div>
                  <div className="search-inputs">
                    <label className="text-14 color-grey">To</label>
                    <PlacePicker />
                  </div>
                </div>
                <div className="search-item search-button mb-0">
                  <button className="btn btn-search" type="submit">
                    <Image
                      width={20}
                      height={20}
                      src="/assets/imgs/template/icons/search.svg"
                      alt="luxride"
                    />
                    Search
                  </button>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="tab-rate"
              role="tabpanel"
              aria-labelledby="tab-rate"
            >
              <div className="box-form-search">
                <div className="search-item search-date">
                  <div className="search-icon">
                    <span className="item-icon icon-date"> </span>
                  </div>
                  <div className="search-inputs">
                    <label className="text-14 color-grey">Date</label>
                    <DatePickerComponent />
                  </div>
                </div>
                <div className="search-item search-time">
                  <div className="search-icon">
                    <span className="item-icon icon-time"> </span>
                  </div>
                  <div className="search-inputs">
                    <label className="text-14 color-grey">Time</label>
                    <TimePickerComponent />
                  </div>
                </div>
                <div className="search-item search-from">
                  <div className="search-icon">
                    <span className="item-icon icon-from"> </span>
                  </div>
                  <div className="search-inputs">
                    <label className="text-14 color-grey">From</label>
                    <PlacePicker />
                  </div>
                </div>
                <div className="search-item search-to">
                  <div className="search-icon">
                    <span className="item-icon icon-to"> </span>
                  </div>
                  <div className="search-inputs">
                    <label className="text-14 color-grey">To</label>
                    <PlacePicker />
                  </div>
                </div>
                <div className="search-item search-button mb-0">
                  <button className="btn btn-search" type="submit">
                    <Image
                      width={20}
                      height={20}
                      src="/assets/imgs/template/icons/search.svg"
                      alt="luxride"
                    />
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
