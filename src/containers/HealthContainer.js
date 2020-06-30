import React, { Component, Fragment } from 'react';
import Health from '../components/HealthComponent/Health';
import HealthShow from '../components/HealthComponent/HealthShow';
import { connect } from 'react-redux';
import { fetchHealths } from '../actions/healthActions';
import { Route, Switch } from 'react-router-dom';
import { Divider } from 'semantic-ui-react';

class HealthContainer extends Component {
    componentDidMount() {
        this.props.fetchHealths();
    }

    render() {
        return (
            <div>
                <Divider />
                <Switch>
                    <Route
                        path='/locations/:id'
                        render={(routerProps) => {
                            return (
                                <HealthShow
                                {...routerProps}
                                healths={this.props.healths}
                            />
                            );
                        }}
                        />
                        <Route
                            path='/healths'
                            render={(routerProps) => {
                                return (
                                    <Fragment>
                                        <Health
                                        {...routerProps}
                                        healths={this.props.healths}
                                        />
                                    </Fragment>
                                );
                            }}
                        />
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    healths: state.healths.sort((a, b) => (a.diagnosis > b.diagnosis ? 1 : -1)),
});

export default connect(mapStateToProps, { fetchHealths })(HealthContainer);