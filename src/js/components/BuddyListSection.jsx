import React, {PropTypes, Component} from 'react';
import { Button, Table, ListGroupItem, Panel, Glyphicon } from 'react-bootstrap';
import './BuddyListSection.css';

class BuddyListSection extends Component {

    static get propTypes() {
        return {
            buddyList: PropTypes.array,
            filterName: PropTypes.string
        }
    }
    constructor(props) {
        super(props);
        this.handleRemoveBuddy =  this.handleRemoveBuddy.bind(this);
        this.handleExpandBuddy =  this.handleExpandBuddy.bind(this);
        this.filterBuddyList = this.filterBuddyList.bind(this);
    }

    handleRemoveBuddy(evt) {
        const index = evt.target.parentNode.parentNode.getAttribute("id");
        this.props.deleteBuddy(parseInt(index));
        evt.stopPropagation();
    }
    handleExpandBuddy(evt) {
        const index = evt.target.parentNode.getAttribute("id");
        this.props.expandBuddy(parseInt(index));
        evt.stopPropagation();
    }
    findStatusIcon(status) {
        switch(status) {
            case "online": return "green";
            case "away" : return "yellow";
            case "offline" : return "grey";
            case "busy": return "red";
            default: return "grey"
        }
    }

    filterBuddyList(){
        let updatedList = [];
        let filterText = this.props.filterName;
        updatedList = this.props.buddyList.filter(function(item,index){
            return ((item.buddyItem.firstName.toLowerCase().search(
                filterText.toLowerCase()) !== -1) || (item.buddyItem.lastName.toLowerCase().search(
                    filterText.toLowerCase())!== -1)) ;
            });
        return updatedList;
    }
    render() {
        let status;
        let finalBuddyList = this.props.buddyList || [];
        if(this.props.filterName){
            finalBuddyList = this.filterBuddyList();
        }
        return (
            <div>
                 <Table striped  condensed hover>
                     <thead>
                     <tr>
                       <th className="buddyListHeader">Your Buddies</th>
                     </tr>
                   </thead>
                      <tbody>
                            {finalBuddyList.map((entry,index) => {
                                {status="glyphicon glyphicon-user small userStatus "+this.findStatusIcon(entry.status); }
                                return (
                                        <tr key={index} id={index}>
                                            <td className="buddyName" onClick={this.handleExpandBuddy}>{entry.buddyItem.firstName},{entry.buddyItem.lastName} <Glyphicon glyph={status}/></td>
                                            <td className="cancelBuddy"> <Button bsStyle="danger" bsSize="xsmall" onClick={this.handleRemoveBuddy}>X</Button></td>
                                            <Panel collapsible expanded={entry.expand} className="buddyDetails">
                                                <div>Email: {entry.buddyItem.email}</div>
                                                <div>Birthday: {entry.buddyItem.dob}</div>
                                                <div>Bio: {entry.buddyItem.bio}</div>
                                            </Panel>
                                        </tr>
                                );
                            })}
                        </tbody>
                </Table>
            </div>

        );
    }

}

export default BuddyListSection;
