import ListGroup from "react-bootstrap/ListGroup";
import { Dish, Comment } from "../types/types";

interface Props {
  selectedDish: Dish;
}

const DishComments = ({ selectedDish }: Props) => (
  <ListGroup>
    {selectedDish ? (
      selectedDish.comments.map((c: any) => (
        <ListGroup.Item key={c.id}>{c.comment}</ListGroup.Item>
      ))
    ) : (
      <ListGroup.Item>Click on a pasta to see the reviews!</ListGroup.Item>
    )}
  </ListGroup>
);

export default DishComments;
