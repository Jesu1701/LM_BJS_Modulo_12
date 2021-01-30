import {
  getMovementList,
} from './movements.api';
import {
  addMovementRows
} from './movements.helpers';
import {
  mapMovementApiToVm
} from './movements.mappers'
import {
  history
} from '../../core/router';
import {
  onSetValues,
} from '../../common/helpers';
import {
  getAccount
} from '../account/account.api';

const params = history.getParams();

getAccount(params.id).then(account => {
  onSetValues(account);
})

getMovementList().then(movement => {
  if (movement.accountId === params.id) {
    const vmMovements = mapMovementApiToVm(movement);
    addMovementRows(vmMovements);
  } else {
    const vmMovements = mapMovementApiToVm(movement).filter(movement => movement.accountId === params.id );
    addMovementRows(vmMovements);
  }
});
