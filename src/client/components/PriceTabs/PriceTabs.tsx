import React, { useState } from 'react';
import classNames from 'classnames';
import { priceTabsHeader } from 'src/client/__mocks__/Tabs/Tabs';
import TableCustom from '../TableCustom/TableCustom';
import {
  captionTitle,
  tbodyData,
  theadObj,
} from 'src/client/__mocks__/Table/Table';
import TabsCustom from '../TabsCustom/TabsCustom';

const PriceTabs = () => {
  const [active, setActive] = useState(1);

  return (
    <>
      {/* <TabsCustom content={tbodyData} active={active} setActive={setActive} /> */}
      <div className="tabs-price">
        <div className="tabs-price__container">
          <ul className="tabs-price__container_list">
            {priceTabsHeader.map((el) => {
              return (
                <li
                  key={el.ID}
                  onClick={() => setActive(el.ID)}
                  className={classNames(
                    'tabs__item',
                    active === el.ID ? 'tabs__active' : '',
                  )}
                >
                  {el.title}
                </li>
              );
            })}
          </ul>
          {/* <h2>Основные характеристики товара</h2> */}
          <div className="tabs-price__container_content">
            {tbodyData.map((el, index) => {
              if (index + 1 === active) {
                return (
                  <TableCustom
                    theadData={theadObj[active]}
                    tbodyData={el}
                    title={captionTitle[active]}
                  />
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default PriceTabs;
