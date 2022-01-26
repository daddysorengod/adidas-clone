import React from 'react';
import useStyles from './MenuTab.style';

const options = [
  {title: 'Lego'},
  {title: 'Disney'},
  {title: 'Ultraboost 22'},
  {title: 'Slides'},
  {title: 'Manchester united'}
]

function MenuTab({}) {
  const classes = useStyles();
  
  return (
    <section className={classes.wrapper}>
      <div className={classes.container}>
        <div className={`${classes.menuTitle} ${classes.menuRow}`}>
          <h2 className={classes.heading}>POPULAR RIGHT NOW</h2>
        </div>

        <div className={`${classes.summary} ${classes.menuRow}`}>
          <p className={classes.body}></p>
        </div>

        <div className={`${classes.options} ${classes.menuRow}`}>
          {options.map((option) => (
            <a className={classes.option}>{option.title}</a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MenuTab
