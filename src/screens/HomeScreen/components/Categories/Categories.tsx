import React from "react";
import useStyles from "./Categories.styles";

const categoriesImg = [
  {
    id: 1,
    media:
      "https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/viVN/Images/updated_gender_women_dt_tcm337-636701.jpg",
    title: "WOMEN",
  },
  {
    id: 2,
    media:
      "https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/viVN/Images/updated_gender_men_dt_tcm337-636698.jpg",
    title: "MEN",
  },
  {
    id: 3,
    media:
      "https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/viVN/Images/updated_gender_kids_dt_tcm337-636695.jpg",
    title: "KIDS",
  },
];

const Categories = () => {
  const classes = useStyles();

  return (
    <section className={classes.wrapper}>
      <div className={classes.container}>
        <h2 className={classes.heading}>WHO ARE YOU SHOPPING FOR?</h2>
        <div className={classes.categories}>
          {categoriesImg.map(item => (
            <div key={item.id} className={classes.imageContainer}>
              <div className={classes.title}>
                <strong>{item.title}</strong>
              </div>
              <img src={item.media} className={classes.image} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
