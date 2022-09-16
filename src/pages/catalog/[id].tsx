import Link from 'next/link';
import { GetServerSideProps } from 'next/types';
import { FC, useEffect } from 'react';
import { useState } from 'react';
import CatalogCard from 'src/client/components/CatalogCard/CatalogCard';
import DropDown from 'src/client/components/DropDown/DropDown';
import TabsCustom from 'src/client/components/TabsCustom/TabsCustom';
import { IItem } from 'src/client/types/Item/IItem';
import { productCard } from 'src/client/__mocks__/Catalog/CatalogCard';
import { articleArr, sizeArr } from 'src/client/__mocks__/DropDown/DropDown';
import { productObj } from 'src/client/__mocks__/Item/Item';
import { tabsContent } from 'src/client/__mocks__/Tabs/Tabs';
import Button from './../../client/components/Button/Button';
import inst from '../../client/assets/images/contacts/inst.svg';

const CatalogItem: FC = () => {
  const [product, setProduct] = useState({} as IItem);

  const [active, setActive] = useState(1);
  const [article, setArticle] = useState(articleArr[0]);
  const [size, setSize] = useState(sizeArr[0]);
  const [count, setCount] = useState(0);

  return (
    <div className="catalog__item">
      {/*  */}
      {/*  */}
      {/*  */}
      <div className="contacts">
        <div className="contacts__container">
          <h2 className="main__title">Наши контакты</h2>
          <div className="contacts__container_main">
            <div className="contacts__address">
              <h3 className="contacts__main_title">Адрес</h3>
              <a
                href="https://yandex.ru/maps/?um=constructor%3Abb6af8b9371d1773ca08fe8f5cbdfe18760593d4291de4c00a143b0c55b97303&source=constructorLink"
                className=""
              >
                <span className="contacts__main_text">Рязанская ул., 19А.</span>
                <span className="contacts__main_text">Пермь, Россия</span>
              </a>
            </div>
            <div className="contacts__email">
              <h3 className="contacts__main_title">Телефон и почта</h3>
              <a
                className="contacts__main_text tel"
                href="tel:+7(922)640-16-66"
              >
                Телефон: <span>+7 (922) 640-16-66</span>
              </a>
              <a
                className="contacts__main_text"
                href="mailto:perm@ms666.ru"
                target="_blank"
                rel="noopener noreferrer"
              >
                E-mail: <span>perm@ms666.ru</span>
              </a>
            </div>
            <div className="contacts__requisites">
              <h3 className="contacts__main_title">Реквизиты</h3>
              <span className="contacts__main_text">ИНН 7814228141</span>
              <span className="contacts__main_text">ОГРН 1157847167950</span>
              <span className="contacts__main_text">ОКПО 01272893</span>
              <span className="contacts__main_text">
                Банк: ФИЛИАЛ «САНКТ-ПЕТЕРБУРГСКИЙ»
              </span>
              <span className="contacts__main_text">
                АО «АЛЬФА-БАНК» г. Санкт-Петербург
              </span>
              <span className="contacts__main_text">
                Р/счет: 40702810432280001131
              </span>
              <span className="contacts__main_text">БИК: 044030786</span>
              <span className="contacts__main_text">
                К/счет: 30101810600000000786
              </span>
            </div>
            <h3 className="contacts__main_title">Мы в социальных сетях</h3>
            <ul className="contacts__main_list">
              <li className="contacts__item">
                <Link href="/">
                  <div className="contacts__item_social">
                    <img
                      src="../assets/images/contacts/inst.svg"
                      alt="instagram"
                    />
                    <span className="contacts__main_text">Мы в инстаграм</span>
                  </div>
                </Link>
              </li>
              <li className="contacts__item">
                <Link href="/">
                  <div className="contacts__item_social">
                    <img
                      src="../assets/images/contacts/youtube.svg"
                      alt="instagram"
                    />
                    <span className="contacts__main_text">
                      Канал на YouTube
                    </span>
                  </div>
                </Link>
              </li>
              <li className="contacts__item">
                <Link href="/">
                  <div className="contacts__item_social">
                    <img
                      src="../assets/images/contacts/vk.svg"
                      alt="instagram"
                    />
                    <span className="contacts__main_text">Группа в ВК</span>
                  </div>
                </Link>
              </li>
              <li className="contacts__item">
                <Link href="/">
                  <div className="contacts__item_social">
                    <img
                      src="../assets/images/contacts/vk.svg"
                      alt="instagram"
                    />
                    <span className="contacts__main_text">Группа в ВК</span>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/*  */}
      {/*  */}
      {/*  */}
      <div className="catalog__item_container">
        <div className="item__image">
          <div className="item__image_slider">
            {productObj.images.map((el, index) => {
              return <img src={el.url} alt="product" key={index} />;
            })}
          </div>
          <div className="item__image_main">
            <img src={productObj.image.url} alt="" />
          </div>
        </div>
        <div className="item__description">
          <div className="item__description_title">
            <h2 className="description__title_name">{productObj.name}</h2>
            <span className="description__title_type">{productObj.type}</span>
            <span className="description__title_article">
              Артикул: {productObj.article}
            </span>
          </div>
          <div className="item__description_price">
            <div className="description__price">
              <span className="description__price_value">
                {productObj.retail} <span>₽</span>
              </span>
              <span className="description__price_title">Розничная цена</span>
            </div>
            <div className="description__price">
              <span className="description__price_value">
                <span>от</span> {productObj.wholesale} <span>₽</span>
              </span>
              <span className="description__price_title">Оптовая цена</span>
            </div>
          </div>
          <p className="item__description_text">{productObj.text}</p>
          <div className="item__description_choice">
            <div className="description__choice">
              <span className="description__choice_text">
                Выберете артикул:
              </span>
              <DropDown
                data={articleArr}
                selected={article}
                setSelected={setArticle}
              />
            </div>
            <div className="description__choice">
              <span className="description__choice_text">
                Выберете размер: <span>Таблица размеров</span>
              </span>
              <DropDown data={sizeArr} selected={size} setSelected={setSize} />
            </div>
            <div className="description__choice">
              <span className="description__choice_text">Количество:</span>
              <div className="description__choice_count">
                <svg
                  onClick={() => count > 0 && setCount((prev) => prev - 1)}
                  width="15"
                  height="3"
                  viewBox="0 0 15 3"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="15"
                    y="0.5"
                    width="2"
                    height="15"
                    transform="rotate(90 15 0.5)"
                    fill="#C4C4C4"
                  />
                </svg>
                {count}
                <svg
                  onClick={() => setCount((prev) => prev + 1)}
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="6.5" width="2" height="15" fill="#C4C4C4" />
                  <rect
                    x="15"
                    y="6.5"
                    width="2"
                    height="15"
                    transform="rotate(90 15 6.5)"
                    fill="#C4C4C4"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="item__description_btn-group">
            <Button isWhite type="button" btnText="Создать свой дизайн" />
            <Button isBlue type="button" btnText="Добавить в корзину" />
          </div>
        </div>
      </div>
      <div className="catalog__item_about">
        <TabsCustom
          content={tabsContent}
          active={active}
          setActive={setActive}
        />
      </div>
      <div className="catalog__item_similar">
        <h2>Похожие товары</h2>
        <div className="item__similar_content">
          {productCard.map((el, index) => {
            if (index < 5) {
              return <CatalogCard product={el} key={el.ID} />;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default CatalogItem;
