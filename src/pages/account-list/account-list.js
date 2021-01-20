import {
  getAccountList
} from './account-list.api';
import {
  addAccountRows
} from './account-list.helpers';
import {
  mapAccountListFromApiToViewModel
} from './account-list.mappers';
import {
  onUpdateField
} from '../../common/helpers';
import {
  history
} from '../../core/router';

/*
account {
      id: string;
      iban: string;
      name: string;
      balance: 1490, //  number -> string €
      lastTransaction: 2019-12-09T21:30:00; -> DD/MM/YYYY
}
*/

getAccountList().then(accountLists => {
  const viewModelAccountList = mapAccountListFromApiToViewModel(accountLists);
  addAccountRows(viewModelAccountList);

  viewModelAccountList.forEach(account => {

    onUpdateField('select-' + account.id, (event) => {
      const route = event.target.value;
      history.push(route);
    })

  })

});

// VIDEO PASUSADO EN 50 MIN
