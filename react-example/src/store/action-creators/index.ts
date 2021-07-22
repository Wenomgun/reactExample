import * as UserActionsCreation from './userActions'
import * as TodoActionsCreation from './todoActions'

export default {
    ...UserActionsCreation, ...TodoActionsCreation
}