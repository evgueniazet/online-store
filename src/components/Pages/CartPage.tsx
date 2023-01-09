import React, { useEffect } from 'react';
import { PageProps } from '../../types/Page';
import styles from './CartPage.module.scss';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { TextInput } from '../Input/TextInput';
import { Button } from '../Button/Button';
import { ButtonColors } from '../../enums/ButtonColors';
import { StorageKey } from '../../interfaces/StorageKey';
import LocalStorage from '../../utils/LocalStorage';
import { BasketProduct } from '../../interfaces/BasketProduct';
import { CartProduct } from '../CartProduct/CartProduct';
import { Basket } from '../../interfaces/Basket';
import { Product } from '../../types/Product';
import { defaultBasket } from '../../variables/defaultBasket';
import { promo } from '../../variables/promo';

const CartPage = ({ queryParams }: PageProps): JSX.Element => {
  const [basket, setBasket] = React.useState<Basket>(defaultBasket);
  const [products, setProducts] = React.useState<Product[]>([]);
  const [limit, setLimit] = React.useState<string>('3');
  const [promoCode, setPromoCode] = React.useState<string>('');
  const [price, setPrice] = React.useState<number>(0);
  const storage = LocalStorage.getInstance();

  const getPrice = (basket: Basket): number => {
    const summaryPrice = products
      .filter((product) => basket.products.some((item) => item.id === product.id))
      .reduce((a, b) => {
        const itemsQuantity = basket?.products.find((item) => item.id === b.id)?.quantity || 0;
        return a + b.price * itemsQuantity;
      }, 0);
    return summaryPrice;
  };

  const handleChangePromoCode = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPromoCode(e.target.value);
  };

  const handleChangeLimit = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setLimit(e.target.value);
  };

  const handleSubmit = (): void => {
    const isPromoExist: boolean = promo.some((item) => {
      return item.code === promoCode.toUpperCase();
    });

    if (isPromoExist) {
      const isPromoUsed: boolean = basket.promo.some((item) => {
        return item.code === promoCode.toUpperCase();
      });

      if (!isPromoUsed) {
        const basketCopy: Basket = { ...basket };
        const promoObj = promo.find((elem) => {
          return elem.code === promoCode.toUpperCase();
        });

        if (promoObj) {
          basketCopy.promo.push(promoObj);
        }
        setBasket(basketCopy);
        setPromoCode('');
        storage.setData(StorageKey.basket, basketCopy);
        window.dispatchEvent(new Event('storage'));
      }
    }
  };

  const handleClick = (): void => {
    console.log('click');
  };

  const handleRemovePromo = (promoCode: string): void => {
    const basketCopy: Basket = { ...basket };
    const newArrPromo = basketCopy.promo.filter((promo) => {
      return promo.code !== promoCode;
    });

    basketCopy.promo.splice(0, basketCopy.promo.length);
    newArrPromo.map((item) => {
      basketCopy.promo.push(item);
    });
    setBasket(basketCopy);
  };

  const handleAddProduct = (id: number, stock: number): void => {
    const basketCopy: Basket = { ...basket };
    const arr: BasketProduct[] = basketCopy.products;

    arr.forEach((item) => {
      if (id === item.id) {
        if (item.quantity < stock) item.quantity = item.quantity + 1;
      }
    });
    setBasket(basketCopy);
    setPrice(getPrice(basket));
    storage.setData(StorageKey.basket, basketCopy);
    window.dispatchEvent(new Event('storage'));
  };

  const handleRemoveProduct = (id: number): void => {
    const basketCopy: Basket = { ...basket };
    const productsCopy: Product[] = [...products];
    const arr: BasketProduct[] = basketCopy.products;

    arr.forEach((item, idx) => {
      if (id === item.id) {
        if (item.quantity > 1) {
          item.quantity = item.quantity - 1;
        } else {
          arr.splice(idx, 1);
          const productIndex = productsCopy.findIndex((product) => {
            return product.id === id;
          });
          productsCopy.splice(productIndex, 1);
        }
      }
    });

    setBasket(basketCopy);
    setProducts(productsCopy);
    setPrice(getPrice(basket));
    storage.setData(StorageKey.basket, basketCopy);
    window.dispatchEvent(new Event('storage'));
  };

  useEffect(() => {
    const basket: Basket | null = storage.getData(StorageKey.basket);

    if (basket) {
      setBasket(basket);
      const urls: string[] = basket.products.map(
        (item) => `https://dummyjson.com/products/${item.id}`,
      );
      const promises = urls.map((url) => fetch(url));

      Promise.all(promises)
        .then((response) => Promise.all(response.map((r) => r.json())))
        .then((results: Product[]) => {
          setProducts(results);
          const summaryPrice = getPrice(basket);
          setPrice(summaryPrice);
        });
    }
  }, []);

  return (
    <div className={styles.wrapper}>
      <Header />
      <section className={styles.mainWrapper}>
        <div className={styles.mainDecoration} />
        <div className={styles.main}>
          <div className={styles.productsWrapper}>
            <div className={styles.productsHeader}>
              <span className={styles.productsHeaderTitle}>Products in cart</span>
              <span>Limit:</span>
              <TextInput
                className={styles.productsHeaderInput}
                placeholder='Insert text'
                onChange={handleChangeLimit}
                value={limit}
              />
              <div className={styles.productsHeaderSumButtons}>
                <span className={styles.productsHeaderSum}>Page:</span>
                <Button
                  className={styles.productsHeaderButton}
                  title='<'
                  color={ButtonColors.Secondary}
                  onClick={handleClick}
                />
                <span className={styles.productsHeaderSumNumber}>1</span>
                <Button
                  className={styles.productsHeaderButton}
                  title='>'
                  color={ButtonColors.Secondary}
                  onClick={handleClick}
                />
              </div>
            </div>
            <div className={styles.products}>
              {!products.length && (
                <div className={styles.emptyCart}>
                  <span>Cart is empty!</span>
                </div>
              )}
              {products.map((product: Product, idx: number) => {
                return (
                  <CartProduct
                    onAddProduct={handleAddProduct}
                    onRemoveProduct={handleRemoveProduct}
                    product={product}
                    key={product.id}
                    index={idx}
                    stock={product.stock}
                    quantity={
                      basket.products[
                        basket.products.findIndex((element) => {
                          return product.id === element.id;
                        })
                      ]?.quantity
                    }
                  />
                );
              })}
            </div>
          </div>
          <div className={styles.sum}>
            <div className={styles.sumInfo}>
            <span className={styles.sumTitle}>Summary</span>
            <span className={styles.sumProducts}>
              Products: {basket.products.reduce((a, b) => a + b.quantity, 0)}
            </span>
            {basket.promo.some((item) => item) ? (
              <>
                <span className={styles.totalSumWithPromo}>Total:{price}$</span>
                <span className={styles.totalSum}>
                  Sum with discount:
                  {price - (basket.promo.reduce((a, b) => a + b.discount, 0) / 100) * price}$
                </span>
              </>
            ) : (
              <span className={styles.totalSum}>Total:{price}$</span>
            )}
            </div>
            <div className={styles.promo}>
              
            <span className={styles.totalSum}>
              Promo code:{' '}
              {basket.promo.map((item) => {
                return (
                  <div key={item.discount} className={styles.promoCode}>
                    {`${item.code}: -${item.discount}$ `}
                    <Button
                      key={item.code}
                      title='-'
                      color={ButtonColors.Primary}
                      className={styles.promoButton}
                      onClick={() => handleRemovePromo(item.code)}
                    />
                  </div>
                );
              })}{' '}
            </span>
            <TextInput
              className={styles.sumTextInput}
              placeholder='Insert promo code'
              onChange={handleChangePromoCode}
              value={promoCode}
            />
            <span className={styles.promocodes}>Promo: code5, code10, code15</span>
            <Button
              title='Submit promo code'
              className={styles.submitButton}
              color={ButtonColors.Primary}
              onClick={handleSubmit}
            />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default CartPage;
