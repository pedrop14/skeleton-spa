import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/dashboard'
import Elderlies from '@/components/elderly/all'
import ElderlyLook from '@/components/elderly/look'
import ElderlyEdit from '@/components/elderly/edit'
import ElderlyNew from '@/components/elderly/new'
import Caregivers from '@/components/caregiver/all'
import CaregiverLook from '@/components/caregiver/look'
import CaregiverNew from '@/components/caregiver/new'
import CaregiverEdit from '@/components/caregiver/edit'
import VisitNew from '@/components/visit/new'
import Visits from '@/components/visit/all'
import ConsultNew from '@/components/consult/new'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/elderly',
      name: 'view-elderlies',
      component: Elderlies
    },
    {
      path: 'elderly/:_id',
      name: 'look-elderly',
      component: ElderlyLook
    },
    {
      path: 'elderly/edit/:_id',
      name: 'edit-elderly',
      component: ElderlyEdit
    },
    {
      path: 'elderly/new',
      name: 'new-elderly',
      component: ElderlyNew
    },
    {
      path: '/caregiver',
      name: 'view-caregivers',
      component: Caregivers
    },
    {
      path: 'caregiver/:_id',
      name: 'look-caregiver',
      component: CaregiverLook
    },
    {
      path: 'caregiver/new',
      name: 'new-caregiver',
      component: CaregiverNew
    },
    {
      path: 'caregiver/edit/:_id',
      name: 'edit-caregiver',
      component: CaregiverEdit
    },
    {
      path:'/visit/new',
      name: 'new-visit',
      component: VisitNew
    },
    {
      path:'/visit',
      name:'view-visits',
      component: Visits
    },
    {
      path:'/consult/new/:_id',
      name: 'new-consult',
      component: ConsultNew
    }
  ]
})
