import { Route } from '@angular/router';
import { AuthGuard } from 'app/core/auth/guards/auth.guard';
import { NoAuthGuard } from 'app/core/auth/guards/noAuth.guard';
import { LayoutComponent } from 'app/layout/layout.component';
import { InitialDataResolver } from 'app/app.resolvers';
import { AuthGuardOriginal } from './auth.guard';
import { DataResolver, EnrollResolver, MenuResolver, UserResolver } from './data.resolver';
import { ForcedLogoutComponent } from './nuaxess/forced-logout/forced-logout.component';
import { NewSigninComponent } from './nuaxess/new-signin/new-signin.component';
import { UserSettingsComponent } from './nuaxess/user-settings/user-settings.component';
import { UserProfileComponent } from './nuaxess/user-profile/user-profile.component';
import { UserLogoutComponent } from './nuaxess/user-logout/user-logout.component';
import { AddBrokerComponent } from './nuaxess/add-broker/add-broker.component';
import { GuideHomePageComponent } from './nuaxess/guide-home-page/guide-home-page.component';
import { GuideCategoryHomeComponent } from './nuaxess/guide-category-home/guide-category-home.component';
import { GuideHomeComponent } from './guides/guide-home/guide-home.component';

// @formatter:off
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
export const appRoutes: Route[] = [


    {path: '', pathMatch : 'full', redirectTo: 'sign-in'},

    // Redirect signed in user to the '/dashboards/project'
    //
    // After the user signs in, the sign in page will redirect the user to the 'signed-in-redirect'
    // path. Below is another redirection for that path to redirect the user to the desired
    // location. This is a small convenience to keep all main routes together here on this file.
    {path: 'signed-in-redirect', pathMatch : 'full', redirectTo: 'sign-in'},

    // Auth routes for guests
    {
        path: '',
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
  //          {path: 'enroll/:id', component: UserEnrollComponent, resolve: { data: EnrollResolver }, },
  //          {path: 'e/:id', component: UserEnrollComponent, resolve: { data: EnrollResolver }, },
  //          {path: 'e', component: UserEnrollComponent, resolve: { data: EnrollResolver }, },
            {path: 'forced-off/:id', component: ForcedLogoutComponent },
            {path: 'forced-off', component: ForcedLogoutComponent },
            {path: 'sign-in', component: NewSigninComponent },
        //    {path: 'enroll', component: UserEnrollComponent, resolve: { data: EnrollResolver }, }
        ]
    },
    {
        path: '',
        canActivate: [AuthGuardOriginal],
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
            {path: 'sign-out', loadChildren: () => import('app/modules/auth/sign-out/sign-out.module').then(m => m.AuthSignOutModule)},
            {path: 'unlock-session', loadChildren: () => import('app/modules/auth/unlock-session/unlock-session.module').then(m => m.AuthUnlockSessionModule)},
            {path: 'sadmin', component: GuideHomePageComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'category-home/:id', component: GuideCategoryHomeComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'guide/:id', component: GuideHomeComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'user-logout', component: UserLogoutComponent },
            //-- Company
//            {path: 'company-list', component: CompanyListComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
//            {path: 'company-list/:id', component: CompanyListComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
//            {path: 'admin-company-list', component: CompanyListComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
//            {path: 'admin-company-list/:id', component: CompanyListComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            //-- Prospect
//            {path: 'prospect-list', component: ProspectListComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
//            {path: 'prospect-list/:id', component: ProspectListComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
//            {path: 'admin-prospect-list', component: ProspectListComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
//            {path: 'admin-prospect-list/:id', component: ProspectListComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            //-- Enrolling
//            {path: 'enrolling-list', component: CompanyListComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
//            {path: 'enrolling-list/:id', component: CompanyListComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
//            {path: 'admin-enrolling-list', component: CompanyListComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
//            {path: 'admin-enrolling-list/:id', component: CompanyListComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
//            {path: 'plan-list', component: PlanListComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
//            {path: 'member-list', component: MemberListComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            //-- Quotes
//            {path: 'quote-list', component: QuoteListComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
//            {path: 'quote-list/:id', component: QuoteListComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
//            {path: 'quote-list/:id/:id2', component: QuoteListComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
//            {path: 'admin-quote-list', component: QuoteListComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
//            {path: 'admin-quote-list/:id', component: QuoteListComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
//            {path: 'admin-quote-list/:id/:id2', component: QuoteListComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
//            {path: 'addition-list', component: AdditionListComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
//            {path: 'termination-list', component: TerminationListComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
//            {path: 'termination-list', component: TerminationListComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            //-- Commissions
//            {path: 'commission-list', component: CommissionListComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
//            {path: 'admin-commission-list', component: CommissionListComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            //-- Invoices
//            {path: 'invoice-list', component: InvoiceListComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
 //           {path: 'admin-invoice-list', component: InvoiceListComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            //-- Users
  //          {path: 'user-list', component: UserListComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
  //          {path: 'user-list/:id', component: UserListComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            //-- Adds
            {path: 'add-broker', component: AddBrokerComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
 //           {path: 'add-company', component: AddCompanyComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
 //           {path: 'add-company/:id', component: AddCompanyComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
 //           {path: 'add-company/:id/:id2', component: AddCompanyComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
 //           {path: 'add-prospect', component: AddCompanyComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
 //           {path: 'add-prospect/:id', component: AddCompanyComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
 //           {path: 'add-prospect/:id/:id2', component: AddCompanyComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
 //            {path: 'add-quote/:id', component: AddQuoteComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
 //           {path: 'add-quote-request/:id', component: AddQuoteRequestComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            //-- Edits
 //           {path: 'edit-company/:id', component: EditCompanyComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
 //           {path: 'edit-user/:id', component: EditUserComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
 //           {path: 'edit-quote-request/:id', component: EditQuoteComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'user-settings', component: UserSettingsComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            {path: 'user-profile', component: UserProfileComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            //-- Dashboard
 //           {path: 'project-dashboard/:id', component: ProjectDashboardComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
             //-- Searches
 //           {path: 'project-list/:id', component: ProjectListComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            //-- Alt Homes
 //           {path: 'broker-home', component: BrokerHomeComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
  //          {path: 'badmin', component: AdminDashboardComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },
            //-- Enrollment
  //          {path: 'enroll/:id', component: UserEnrollComponent, resolve: { data: EnrollResolver }, },
  //          {path: 'org-profile', component: OrgProfileComponent, resolve: { menudata: MenuResolver, data: DataResolver, userdata: UserResolver }, },           
  //          {path: 'enroll', component: UserEnrollComponent, resolve: { data: EnrollResolver }, }
        ]
    },
    {
        path: '',
        component  : LayoutComponent,
        data: {
            layout: 'empty'
        },
        children   : [
            {path: 'home', loadChildren: () => import('app/modules/landing/home/home.module').then(m => m.LandingHomeModule)},
        ]
    },

    // Admin routes
    {
        path       : '',
         component  : LayoutComponent,
        resolve    : {
            initialData: InitialDataResolver,
        },
        children   : [
            // Pages
            {path: 'pages', children: [
                {path: 'error', children: [
                    {path: '404', loadChildren: () => import('app/modules/admin/pages/error/error-404/error-404.module').then(m => m.Error404Module)},
                    {path: '500', loadChildren: () => import('app/modules/admin/pages/error/error-500/error-500.module').then(m => m.Error500Module)}
                ]},
            ]},

            // 
            {path: 'ui', children: [
                {path: 'forms', children: [
                    {path: 'fields', loadChildren: () => import('app/modules/admin/ui/forms/fields/fields.module').then(m => m.FormsFieldsModule)},
                ]},
            ]},
            {path: '404-not-found', pathMatch: 'full', loadChildren: () => import('app/modules/admin/pages/error/error-404/error-404.module').then(m => m.Error404Module)},
            {path: '**', redirectTo: '404-not-found'}
        ]
    }
];
