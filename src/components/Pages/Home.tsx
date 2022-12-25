import React from 'react';
import { PageProps } from '../../types/Page';
import { Sendbox } from '../Sendbox/Sendbox';
import Link from '../../utils/Link';
import styles from './Home.module.scss';
import { IconBasket, IconStore, Mark } from '../../icons/icons';

const HomePage = ({ queryParams }: PageProps) => {
  // query string for test /?id=10&limit=100
  // console.log(queryParams);

  // TODO: Add data fetching here according queryParams

  return (
    // <div>
    // {/* TODO: Put conditional loader here while data is fetching */}
    // {/* TODO: Put Home template component here with fetched data as props */}
    // {/* <Sendbox />; */}

    <div className={styles.wrapper}>
      <header className={styles.headerWrapper}>
        <div className={styles.header}>
          <div className={styles.headerLogo}>
            <IconStore className={styles.headerLogoIcon} />
            <span className={styles.headerLogoTitle}>Online Store</span>
          </div>
          <span className={styles.headerText}> Total: 500$</span>
          <IconBasket className={styles.headerBasket} />
        </div>
      </header>
      <section className={styles.mainWrapper}>
        <div className={styles.mainDecoration} />
        <div className={styles.main}>
          <div className={styles.filters}>
            <div className={styles.filtersHeader}>
              <button className={styles.filterHeaderButton}>Reset Filters</button>
              <button className={styles.filterHeaderButton}>Copy Link</button>
            </div>
            <div className={styles.filter}>
              <h2 className={styles.filterTitle}>Category</h2>
              <div className={styles.listItemWrapper}>
                <input type='checkbox' className={styles.checkbox} />
                <label className={styles.label}>text</label>
              </div>
              <div className={styles.listItemWrapper}>
                <input type='checkbox' className={styles.checkbox} />
                <label className={styles.label}>text</label>
              </div>
              <div className={styles.listItemWrapper}>
                <input type='checkbox' className={styles.checkbox} />
                <label className={styles.label}>text</label>
              </div>
              <div className={styles.listItemWrapper}>
                <input type='checkbox' className={styles.checkbox} />
                <label className={styles.label}>text</label>
              </div>
              <div className={styles.listItemWrapper}>
                <input type='checkbox' className={styles.checkbox} />
                <label className={styles.label}>text</label>
              </div>
              <div className={styles.listItemWrapper}>
                <input type='checkbox' className={styles.checkbox} />
                <label className={styles.label}>text</label>
              </div>
              <div className={styles.listItemWrapper}>
                <input type='checkbox' className={styles.checkbox} />
                <label className={styles.label}>text</label>
              </div>
            </div>
            <div className={styles.filter}>
              <h2 className={styles.filterTitle}>Brand</h2>
              <div className={styles.listItemWrapper}>
                <input type='checkbox' className={styles.checkbox} />
                <label className={styles.label}>text</label>
              </div>
              <div className={styles.listItemWrapper}>
                <input type='checkbox' className={styles.checkbox} />
                <label className={styles.label}>text</label>
              </div>
              <div className={styles.listItemWrapper}>
                <input type='checkbox' className={styles.checkbox} />
                <label className={styles.label}>text</label>
              </div>
              <div className={styles.listItemWrapper}>
                <input type='checkbox' className={styles.checkbox} />
                <label className={styles.label}>text</label>
              </div>
              <div className={styles.listItemWrapper}>
                <input type='checkbox' className={styles.checkbox} />
                <label className={styles.label}>text</label>
              </div>
              <div className={styles.listItemWrapper}>
                <input type='checkbox' className={styles.checkbox} />
                <label className={styles.label}>text</label>
              </div>
              <div className={styles.listItemWrapper}>
                <input type='checkbox' className={styles.checkbox} />
                <label className={styles.label}>text</label>
              </div>
            </div>
            <div className={styles.rangeWrapper}>
              <div className={styles.rangeTitle}>Price</div>
              <div className={styles.rangeValues}>
                <span>0 $</span>
                <span>↔</span>
                <span>1000$</span>
              </div>
              <div className={styles.rangeContainer}>
                <div className={styles.rangeLine}></div>
                <input type='range' min='0' max='100' step='1' className={styles.range} />
                <input type='range' min='0' max='100' step='1' className={styles.range} />
              </div>
            </div>
            <div className={styles.rangeWrapper}>
              <div className={styles.rangeTitle}>Stock</div>
              <div className={styles.rangeValues}>
                <span>2</span>
                <span>↔</span>
                <span>200</span>
              </div>
              <div className={styles.rangeContainer}>
                <div className={styles.rangeLine}></div>
                <input type='range' min='0' max='100' step='1' className={styles.range} />
                <input type='range' min='0' max='100' step='1' className={styles.range} />
              </div>
            </div>
          </div>
          <div className={styles.cards}>
            <div className={styles.cardsHeader}>
              <select className={styles.cardsHeaderSelect}>
                <option>text</option>
                <option>text</option>
                <option>text</option>
                <option>text</option>
                <option>text</option>
                <option>text</option>
                <option>text</option>
              </select>
              <span className={styles.cardsHeaderText}>Found: 50</span>
              <input type='text' className={styles.cardsHeaderInput} />
              <div>
                <button className={styles.cardsHeaderButton}>4</button>
                <button className={styles.cardsHeaderButton}>6</button>
              </div>
            </div>
            <div className={styles.cardsContainer}>
              <div className={styles.card}>
                <span className={styles.cardTitle}>Card title</span>
                <div className={styles.cardButtons}>
                  <button className={styles.cardButton}>Add to cart</button>
                  <button className={styles.cardButton}>Details</button>
                </div>
              </div>
              <div className={styles.card}>
                <span className={styles.cardTitle}>Card title</span>
                <div className={styles.cardButtons}>
                  <button className={styles.cardButton}>Add to cart</button>
                  <button className={styles.cardButton}>Details</button>
                </div>
              </div>
              <div className={styles.card}>
                <span className={styles.cardTitle}>Card title</span>
                <div className={styles.cardButtons}>
                  <button className={styles.cardButton}>Add to cart</button>
                  <button className={styles.cardButton}>Details</button>
                </div>
              </div>
              <div className={styles.card}>
                <span className={styles.cardTitle}>Card title</span>
                <div className={styles.cardButtons}>
                  <button className={styles.cardButton}>Add to cart</button>
                  <button className={styles.cardButton}>Details</button>
                </div>
              </div>
              <div className={styles.card}>
                <span className={styles.cardTitle}>Card title</span>
                <div className={styles.cardButtons}>
                  <button className={styles.cardButton}>Add to cart</button>
                  <button className={styles.cardButton}>Details</button>
                </div>
              </div>
              <div className={styles.card}>
                <span className={styles.cardTitle}>Card title</span>
                <div className={styles.cardButtons}>
                  <button className={styles.cardButton}>Add to cart</button>
                  <button className={styles.cardButton}>Details</button>
                </div>
              </div>
              <div className={styles.card}>
                <span className={styles.cardTitle}>Card title</span>
                <div className={styles.cardButtons}>
                  <button className={styles.cardButton}>Add to cart</button>
                  <button className={styles.cardButton}>Details</button>
                </div>
              </div>
              <div className={styles.card}>
                <span className={styles.cardTitle}>Card title</span>
                <div className={styles.cardButtons}>
                  <button className={styles.cardButton}>Add to cart</button>
                  <button className={styles.cardButton}>Details</button>
                </div>
              </div>
              <div className={styles.card}>
                <span className={styles.cardTitle}>Card title</span>
                <div className={styles.cardButtons}>
                  <button className={styles.cardButton}>Add to cart</button>
                  <button className={styles.cardButton}>Details</button>
                </div>
              </div>
              <div className={styles.card}>
                <span className={styles.cardTitle}>Card title</span>
                <div className={styles.cardButtons}>
                  <button className={styles.cardButton}>Add to cart</button>
                  <button className={styles.cardButton}>Details</button>
                </div>
              </div>
              <div className={styles.card}>
                <span className={styles.cardTitle}>Card title</span>
                <div className={styles.cardButtons}>
                  <button className={styles.cardButton}>Add to cart</button>
                  <button className={styles.cardButton}>Details</button>
                </div>
              </div>
              <div className={styles.card}>
                <span className={styles.cardTitle}>Card title</span>
                <div className={styles.cardButtons}>
                  <button className={styles.cardButton}>Add to cart</button>
                  <button className={styles.cardButton}>Details</button>
                </div>
              </div>
              <div className={styles.card}>
                <span className={styles.cardTitle}>Card title</span>
                <div className={styles.cardButtons}>
                  <button className={styles.cardButton}>Add to cart</button>
                  <button className={styles.cardButton}>Details</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    // {/* For demo purposes it needs to be deleted later */}
    // {/* <ul>
    //   <li>
    //     <Link linkTo='/product'>Go to product</Link>
    //   </li>
    //   <li>
    //     <Link linkTo='/checkout'>Go to bucket</Link>
    //   </li>
    // </ul> */}
    // </div>
  );
};

export default HomePage;
