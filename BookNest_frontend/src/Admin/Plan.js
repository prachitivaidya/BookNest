import React from "react";
import PlanService from "./PlanService";
import "./Plan.css"; // Import CSS file for styling
import AdminHeader from './AdminHeader';
class Plan extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            newPlan: {
                name: "",
                numberOfMonths: 0,
                price: 0,
                subscribedUserCount: 0
            },
            updatePlan: {
                id: null,
                name: "",
                numberOfMonths: 0,
                price: 0,
                subscribedUserCount: 0
            },
            showUpdateModal: false
        };
    }

    componentDidMount() {
        this.fetchPlans();
    }

    fetchPlans() {
        PlanService.getPlans().then((response) => {
            this.setState({ users: response.data });
        });
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState((prevState) => ({
            updatePlan: {
                ...prevState.updatePlan,
                [name]: value
            }
        }));
    };

    handleAddPlan = () => {
        PlanService.addPlan(this.state.newPlan)
            .then(() => {
                this.fetchPlans();
                this.setState({
                    newPlan: {
                        name: "",
                        numberOfMonths: 0,
                        price: 0,
                        subscribedUserCount: 0
                    }
                });
            })
            .catch((error) => {
                console.error("Error adding plan:", error);
            });
    };

    handleDeletePlan = (planId) => {
        PlanService.deletePlan(planId)
            .then(() => {
                this.fetchPlans();
            })
            .catch((error) => {
                console.error("Error deleting plan:", error);
            });
    };

    handleUpdatePlan = () => {
        const { id, name, price, numberOfMonths } = this.state.updatePlan;
        PlanService.updatePlan(id, { name, price, numberOfMonths })
            .then(() => {
                this.fetchPlans();
                this.setState({
                    showUpdateModal: false,
                    updatePlan: {
                        id: null,
                        name: "",
                        numberOfMonths: 0,
                        price: 0,
                        subscribedUserCount: 0
                    }
                });
            })
            .catch((error) => {
                console.error("Error updating plan:", error);
            });
    };

    populateUpdateForm = (plan) => {
        this.setState({
            updatePlan: {
                id: plan.pid,
                name: plan.name,
                numberOfMonths: plan.numberOfMonths,
                price: plan.price,
                subscribedUserCount: plan.subscribedUserCount
            },
            showUpdateModal: true
        });
    };

    render() {
        return (
            <> <AdminHeader />
            <div className="container">
                <h1 className="text-center">Plans</h1>
                <div className="add-plan-form registration-form">
                    <h2>Add Plan</h2>
                    <div className="input-container">
                        <label>Plan Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={this.state.newPlan.name}
                            onChange={(e) =>
                                this.setState({
                                    newPlan: {
                                        ...this.state.newPlan,
                                        name: e.target.value
                                    }
                                })
                            }
                            placeholder="Plan Name"
                        />
                    </div>
                    <div className="input-container">
                        <label>Number of Months:</label>
                        <input
                            type="number"
                            name="numberOfMonths"
                            value={this.state.newPlan.numberOfMonths}
                            onChange={(e) =>
                                this.setState({
                                    newPlan: {
                                        ...this.state.newPlan,
                                        numberOfMonths: parseInt(e.target.value)
                                    }
                                })
                            }
                            placeholder="Months"
                        />
                    </div>
                    <div className="input-container">
                        <label>Price:</label>
                        <input
                            type="number"
                            name="price"
                            value={this.state.newPlan.price}
                            onChange={(e) =>
                                this.setState({
                                    newPlan: {
                                        ...this.state.newPlan,
                                        price: parseInt(e.target.value)
                                    }
                                })
                            }
                            placeholder="Price"
                        />
                    </div>
                    <button onClick={this.handleAddPlan}>Add Plan</button>
                </div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Plan Id</th>
                            <th>Plan Name</th>
                            <th>Months</th>
                            <th>Price</th>
                            <th>Subscribed User Count</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.users.map((user) => (
                            <tr key={user.pid}>
                                <td>{user.pid}</td>
                                <td>{user.name}</td>
                                <td>{user.numberOfMonths}</td>
                                <td>{user.price}</td>
                                <td>{user.subscribedUserCount}</td>
                                <td>
                                    <button
                                        onClick={() =>
                                            this.handleDeletePlan(user.pid)
                                        }
                                    >
                                        Delete
                                    </button>
                                    <button
                                        onClick={() =>
                                            this.populateUpdateForm(user)
                                        }
                                    >
                                        Update
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {this.state.showUpdateModal && (
                    <div className="modal">
                        <div className="modal-content registration-form">
                            <h2>Update Plan</h2>
                            <div className="input-container">
                                <label>Plan Name:</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={this.state.updatePlan.name}
                                    onChange={this.handleInputChange}
                                    placeholder="Plan Name"
                                />
                            </div>
                            <div className="input-container">
                                <label>Number of Months:</label>
                                <input
                                    type="number"
                                    name="numberOfMonths"
                                    value={this.state.updatePlan.numberOfMonths}
                                    onChange={this.handleInputChange}
                                    placeholder="Months"
                                />
                            </div>
                            <div className="input-container">
                                <label>Price:</label>
                                <input
                                    type="number"
                                    name="price"
                                    value={this.state.updatePlan.price}
                                    onChange={this.handleInputChange}
                                    placeholder="Price"
                                />
                            </div>
                            <button onClick={this.handleUpdatePlan}>
                                Update Plan
                            </button>
                        </div>
                    </div>
                )}
            </div>
            </>
        );
    }
}

export default Plan;
