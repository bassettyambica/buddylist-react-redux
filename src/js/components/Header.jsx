import React, {Component} from 'react';
import './Header.css';
import { Button, Modal, FormControl, Col, ControlLabel, Form, FormGroup } from 'react-bootstrap';
class Header extends Component {

    constructor(props) {
        super(props);
        this.handleAddUser = this.handleAddUser.bind(this);
        this.entryDetails = this.entryDetails.bind(this);
        this.filterBuddyList = this.filterBuddyList.bind(this);
        this.userDetails = {};
    }

    handleAddUser() {
        let userData = {
            item: this.userDetails,
            status:"online"
        }
        this.props.addBuddyToList(userData);
        this.userDetails = {};
        this.props.closeAddBuddyForm();
    }

    componentWillMount(){
        //dummy data
        const buddy1 = {
            item: {
                firstName: "Sam",
                lastName: "Roy"
            },
            status: "away"
        };
        const buddy2 = {
            item: {
                firstName: "Tom",
                lastName: "Cruise"
            },
            status: "busy"
        };
        const buddy3 = {
            item: {
                firstName: "Garry",
                lastName: "Pullock"
            },
            status: "offline"
        };
        this.props.addBuddyToList(buddy1);
        this.props.addBuddyToList(buddy2);
        this.props.addBuddyToList(buddy3);

    }

    entryDetails(evt) {
     switch(evt.target.id) {
         case 'fName' : this.userDetails.firstName = evt.target.value;evt.stopPropagation();
                return;
         case 'lName' : this.userDetails.lastName = evt.target.value;evt.stopPropagation();
                return;
         case 'uName' : this.userDetails.userName = evt.target.value;evt.stopPropagation();
                return;
         case 'email' : this.userDetails.email = evt.target.value;evt.stopPropagation();
                return;
         case 'dob' : this.userDetails.dob = evt.target.value;evt.stopPropagation();
                return;
         case 'bio' : this.userDetails.bio = evt.target.value;evt.stopPropagation();
                return;
         default: return;
     }
    }

    renderAddBuddyForm() {
         if (this.props.isAddFormVisible) {
             return (

                 <div className="addBuddysssSection">
                     <Modal.Dialog>
                          <Modal.Header>
                            <Modal.Title>Add New buddy
                                <span className="close" onClick={this.props.closeAddBuddyForm}>&times;</span>
                            </Modal.Title>

                          </Modal.Header>

                          <Modal.Body>
                               <Form horizontal>
                                   <FormGroup controlId="fName">
                                      <Col componentClass={ControlLabel} sm={2}>
                                        FirstName
                                      </Col>
                                      <Col sm={10}>
                                        <FormControl type="input" placeholder="First Name"   onChange={this.entryDetails}/>
                                      </Col>
                                    </FormGroup>
                                    <FormGroup controlId="lName">
                                       <Col componentClass={ControlLabel} sm={2}>
                                         LastName
                                       </Col>
                                       <Col sm={10}>
                                         <FormControl type="input" placeholder="Last Name"   onChange={this.entryDetails}/>
                                       </Col>
                                     </FormGroup>
                                     <FormGroup controlId="uName">
                                        <Col componentClass={ControlLabel} sm={2}>
                                          UserName
                                        </Col>
                                        <Col sm={10}>
                                          <FormControl type="input" placeholder="User Name"   onChange={this.entryDetails}/>
                                        </Col>
                                      </FormGroup>
                                      <FormGroup controlId="dob">
                                         <Col componentClass={ControlLabel} sm={2}>
                                           DOB
                                         </Col>
                                         <Col sm={10}>
                                           <FormControl type="date" placeholder="Date of Birth"   onChange={this.entryDetails}/>
                                         </Col>
                                       </FormGroup>
                                       <FormGroup controlId="email">
                                          <Col componentClass={ControlLabel} sm={2}>
                                            Email
                                          </Col>
                                          <Col sm={10}>
                                            <FormControl type="email" placeholder="Email"   onChange={this.entryDetails}/>
                                          </Col>
                                        </FormGroup>
                                        <FormGroup controlId="bio">
                                           <Col componentClass={ControlLabel} sm={2}>
                                             Bio
                                           </Col>
                                           <Col sm={10}>
                                             <FormControl componentClass="textarea" placeholder="Short Biography"   onChange={this.entryDetails}/>
                                           </Col>
                                         </FormGroup>
                                </Form>
                          </Modal.Body>

                          <Modal.Footer>
                            <Button onClick={this.props.closeAddBuddyForm}>Close</Button>
                            <Button id="addBtn" bsStyle="success"  onClick={this.handleAddUser}>Add</Button>
                          </Modal.Footer>

                    </Modal.Dialog>
                 </div>
             );
         }
    }

    filterBuddyList(evt) {
        const searchValue = evt.target.parentNode.childNodes[0].value;
        this.props.filterByName(searchValue);
    }

    renderSearchBuddyForm() {
         if (this.props.isSearchFormVisible) {
             return (
                 <div className="searchBuddySection">
                     <FormGroup>
                         <FormControl id="searchInput" type="text" placeholder="Search by firstname or lastname " />
                         <Button onClick={this.filterBuddyList} type="submit">Search</Button>
                     </FormGroup>
                     {' '}

                 </div>
             );
         }
    }
    render() {
        return (
            <div>
                <div>
                    <button onClick={this.props.showAddBuddyForm}>Add New Buddy</button>
                    <button onClick={this.props.showSearchBuddy}>Search a Buddy</button>
                </div>
                {this.renderAddBuddyForm()}
                {this.renderSearchBuddyForm()}
            </div>

        );
    }

}

export default Header;
