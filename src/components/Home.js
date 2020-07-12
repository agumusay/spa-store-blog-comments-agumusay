import React from 'react';
import { Item, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Home = (props) => {
  const { posts } = props;
  function checkComments(comments) {
    if (comments.length < 1) return 'No comments yet';
    if (comments.length === 1) return comments.length + ' comment';
    if (comments.length > 1) return comments.length + ' comments';
  }
  function renderItems() {
    return (
      <Item.Group divided>
        {posts.map(({ slug, title, id, text, comments }) => {
          return (
            <Item as={Link} to={`${slug}`} key={id}>
              <Item.Image
                size="small"
                src={`https://i.pravatar.cc/300?u=${id}`}
              />
              <Item.Content>
                <Item.Header >{title}</Item.Header>
                <Item.Description>{text}</Item.Description>
                <Item.Extra>
                  <Icon color="orange" name="comment" /> {checkComments(comments)}
                </Item.Extra>
              </Item.Content>
            </Item>
          );
        })}
      </Item.Group>
    );
  }
  return renderItems();
};
const mapStateToProps = (state) => {
  return {
    ...state,
    posts: state.posts,
  };
};
export default connect(mapStateToProps)(Home);
