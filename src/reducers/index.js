import {combineReducers} from 'redux';

import Getallsavedsurveys from './getallsavedsurveys'
import Selectedsavedsurveys from './selectedsavedsurvey'
import Openuniqueemailid from './openuniqueemail'
import Getallopenuniquesurveys from './allopenuniquesurveys'
import Getgeneralsurveys from './allgeneralsurveys'
import Getallgivensurveys from './allgivensurveys'




const allReducers = combineReducers({
    //insert reducer name here to combine
    getallsavedsurveys : Getallsavedsurveys,
    selectedsavedsurveys: Selectedsavedsurveys,
    openuniqueemailid: Openuniqueemailid,
    getallopenuniquesurveys:Getallopenuniquesurveys,
    getgeneralsurveys:Getgeneralsurveys,
    getallgivensurveys:Getallgivensurveys
});

export default allReducers;