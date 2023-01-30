import * as React from 'react';
import img from '../../src/img/pnd.png';
import CardBlock from './News/CardBlock';
import { CardsWrapper } from './styleComponents';

const arrNews = [
  {
    id: 1,
    titleText: 'lorem1',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid cumque delectus doloribus dolorum est modi molestiae numquam obcaecati perferendis quisquam.',
    image: img,
  },
  {
    id: 2,
    titleText: 'lorem2',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid cumque delectus doloribus dolorum est modi molestiae numquam obcaecati perferendis quisquam.',
    image: img,
  },
  {
    id: 3,
    titleText: 'lorem3',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid cumque delectus doloribus dolorum est modi molestiae numquam obcaecati perferendis quisquam.',
    image: img,
  },
  {
    id: 4,
    titleText: 'lorem4',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid cumque delectus doloribus dolorum est modi molestiae numquam obcaecati perferendis quisquam.',
    image: img,
  },
  {
    id: 5,
    titleText: 'lorem5',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid cumque delectus doloribus dolorum est modi molestiae numquam obcaecati perferendis quisquam.',
    image: img,
  },
];

const News = () => {
  const arrayCards = arrNews.map(({ id, titleText, text, image }) => (
    <CardBlock
      key={id}
      id={id}
      titleText={titleText}
      text={text}
      image={image}
    />
  ));

  return <CardsWrapper $test={true}>{arrayCards}</CardsWrapper>;

  // arrNews.map(({id, titleText, text, image})=>
  //     <CardBlock key={id} id={id} titleText={titleText} text={text} image={image} />)
};

// return (
//     <Card sx={{ maxWidth: 345 }}>
//         <CardMedia
//             component="img"
//             height="140"
//             image="/static/images/cards/contemplative-reptile.jpg"
//             alt="green iguana"
//         />
//         <CardContent>
//             <Typography gutterBottom variant="h5" component="div">
//                 Lizard
//             </Typography>
//             <Typography variant="body2" color="text.secondary">
//                 Lizards are a widespread group of squamate reptiles, with over 6,000
//                 species, ranging across all continents except Antarctica
//             </Typography>
//         </CardContent>
//         <CardActions>
//             <Button size="small">Share</Button>
//             <Button size="small">Learn More</Button>
//         </CardActions>
//     </Card>
// )

export default News;
