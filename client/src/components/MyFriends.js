import React from 'react';
import axios from 'axios';
import { Card, Divider, Image, Button, Icon } from 'semantic-ui-react';

class MyFriends extends React.Component {
  state = { friends: [], };

  componentDidMount() {
    axios.get("/api/my_friends")
      .then( res => this.setState({ friends: res.data, }) );
  }

  showFriends = () => {
      const {friends} = this.state
    return  friends.map( friend =>
        <Card key={friend.id}>
        <Card key={friend.id}>
            <Image src={friend.avatar} />
            <Card.Content>
              <Card.Header>
                { friend.name }
              </Card.Header>
              <Card.Description>
                Employer: { friend.c_company }
              </Card.Description>
              <Card.Meta>
               Current Position: { friend.c_position }
              </Card.Meta>
              <Card.Description>
                Enjoys: { friend.f_indoor } and {friend.f_outdoor}
              </Card.Description>
              <Card.Description>
                { friend.f_outdoor }
              </Card.Description>
              <Card.Meta>
                Top Skills: { friend.t_skills }
              </Card.Meta>
            </Card.Content>
            <Card.Content extra>
              <Button color="red" icon basic onClick={() => this.downVote(friend.id)}>
                <Icon name="thumbs down" />
              </Button>
              <Button color="green" icon basic onClick={() => this.upvote(friend.id)}>
                <Icon name="thumbs up" />
              </Button>
            </Card.Content>
          </Card>
        </Card>
    )
  }

  render() {
    const { friends, } = this.state;
    return (
      <Card.Group itemsPerRow={4}>
        {this.showFriends()}

      </Card.Group>
    )
  }
}

export default MyFriends;
