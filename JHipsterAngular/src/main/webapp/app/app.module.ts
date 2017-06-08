import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ng2-webstorage';

import { JHipsterAngularSharedModule, UserRouteAccessService } from './shared';
import { JHipsterAngularHomeModule } from './home/home.module';
import { JHipsterAngularAdminModule } from './admin/admin.module';
import { JHipsterAngularAccountModule } from './account/account.module';
import { JHipsterAngularEntityModule } from './entities/entity.module';

import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

import {
    JhiMainComponent,
    LayoutRoutingModule,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        LayoutRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        JHipsterAngularSharedModule,
        JHipsterAngularHomeModule,
        JHipsterAngularAdminModule,
        JHipsterAngularAccountModule,
        JHipsterAngularEntityModule
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class JHipsterAngularAppModule {}
