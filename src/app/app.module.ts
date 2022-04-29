import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExtraOptions, PreloadAllModules, RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { FuseModule } from '@fuse';
import { FuseConfigModule } from '@fuse/services/config';
import { CoreModule } from 'app/core/core.module';
import { appConfig } from 'app/core/config/app.config';
import { LayoutModule } from 'app/layout/layout.module';
import { AppComponent } from 'app/app.component';
import { appRoutes } from 'app/app.routing';
import { NgxTablePaginationModule } from 'ngx-table-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRippleModule } from '@angular/material/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgApexchartsModule } from 'ng-apexcharts';
import { FuseNavigationModule } from '@fuse/components/navigation';
import { FuseLoadingBarModule } from '@fuse/components/loading-bar';
import { FuseFullscreenModule } from '@fuse/components/fullscreen/fullscreen.module';
import { LanguagesModule } from 'app/layout/common/languages/languages.module';
import { MessagesModule } from 'app/layout/common/messages/messages.module';
import { NotificationsModule } from 'app/layout/common/notifications/notifications.module';
import { QuickChatModule } from 'app/layout/common/quick-chat/quick-chat.module';
import { SearchModule } from 'app/layout/common/search/search.module';
import { ShortcutsModule } from 'app/layout/common/shortcuts/shortcuts.module';
import { UserModule } from 'app/layout/common/user/user.module';
import { SharedModule } from 'app/shared/shared.module';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { VerticalMenuComponent } from './nuaxess/vertical-menu/vertical-menu.component';
import { TopMenuComponent } from './nuaxess/top-menu/top-menu.component';

import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatSelectModule } from '@angular/material/select';
import { FuseHighlightModule } from '@fuse/components/highlight';
import { FormsFieldsComponent } from 'app/modules/admin/ui/forms/fields/fields.component';
import { FuseCardComponent, FuseCardModule } from '@fuse/components/card';
import { ForcedLogoutComponent } from './nuaxess/forced-logout/forced-logout.component';
import { NewSigninComponent } from './nuaxess/new-signin/new-signin.component';
import { UserLogoutComponent } from './nuaxess/user-logout/user-logout.component';
import { GuideHomePageComponent } from './nuaxess/guide-home-page/guide-home-page.component';
import { GuideCategoryHomeComponent } from './nuaxess/guide-category-home/guide-category-home.component';
import { GuidePageComponent } from './nuaxess/guide-page/guide-page.component';
import { AddGuideCategoryComponent } from './nuaxess/add-guide-category/add-guide-category.component';
import { AddGuidePageswComponent } from './nuaxess/add-guide-pagesw/add-guide-pagesw.component';
import { CategoryListComponent } from './nuaxess/category-list/category-list.component';
import { EditGuidePageComponent } from './nuaxess/edit-guide-page/edit-guide-page.component';
import { GuideCategoryDashboardComponent } from './nuaxess/guide-category-dashboard/guide-category-dashboard.component';

const routerConfig: ExtraOptions = {
    preloadingStrategy       : PreloadAllModules,
    scrollPositionRestoration: 'enabled'
};

@NgModule({
    declarations: [
        AppComponent,
        AddGuideCategoryComponent,
        AddGuidePageswComponent,
        VerticalMenuComponent,
        TopMenuComponent,
        CategoryListComponent,
        EditGuidePageComponent,
        ForcedLogoutComponent,
        NewSigninComponent,
        GuideCategoryDashboardComponent,
        UserLogoutComponent,
        GuideHomePageComponent,
        GuideCategoryHomeComponent,
        GuidePageComponent
    ],
    imports     : [
        BrowserModule,
        BrowserAnimationsModule,
        CoreModule,
        FuseModule,
        FuseConfigModule.forRoot(appConfig),
  //      FuseMockApiModule.forRoot(mockApiServices),
        FuseFullscreenModule,
        FuseHighlightModule,
        FuseLoadingBarModule,
        FuseNavigationModule,
        FuseCardModule,
        LayoutModule,
        LanguagesModule,
        MatButtonModule,
        MatChipsModule,
        MatFormFieldModule,
        MatButtonToggleModule,
        MatDividerModule,
        MatIconModule,
        MatMenuModule,
        MatInputModule,
        MatProgressBarModule,
        MatDatepickerModule,
        MatRippleModule,
        MatSidenavModule,
        MatSortModule,
        MatSelectModule,
        MatTableModule,
        MatTabsModule,
        MessagesModule,
        MatMomentDateModule,
        NgxTablePaginationModule,
        Ng2SearchPipeModule,
        NgApexchartsModule,
        NotificationsModule,
        RouterModule.forRoot(appRoutes, routerConfig),
        QuickChatModule,
        SearchModule,
        ShortcutsModule,
        UserModule,
        SharedModule,
        MarkdownModule.forRoot({})
    ],
    providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
    bootstrap   : [
        AppComponent
    ]
})
export class AppModule
{
}
