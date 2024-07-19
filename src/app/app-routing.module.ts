import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromiseComponent } from './promise/promise.component';
import { ObservableComponent } from './observable/observable.component';
import { ListComponent } from './observable/List/list.component';
import { FromEventComponent } from './observable/from-event/from-event.component';
import { IntervalComponent } from './observable/interval/interval.component';
import { OfFromComponent } from './observable/of-from/of-from.component';
import { ToArrayComponent } from './observable/to-array/to-array.component';
import { CustomComponent } from './observable/custom/custom.component';
import { MapComponent } from './observable/map/map.component';
import { PluckComponent } from './observable/pluck/pluck.component';
import { FilterComponent } from './observable/filter/filter.component';
import { TapComponent } from './observable/tap/tap.component';
import { TakeComponent } from './observable/take/take.component';
import { RetryComponent } from './observable/retry/retry.component';
import { DebouncetimeComponent } from './observable/debouncetime/debouncetime.component';
import { SubjectComponent } from './observable/subject/subject.component';
import { ReplaySubjectComponent } from './observable/replay-subject/replay-subject.component';
import { AsyncSubjectComponent } from './observable/async-subject/async-subject.component';
import { ConcatComponent } from './observable/concat/concat.component';
import { MergeComponent } from './observable/merge/merge.component';
import { MergemapComponent } from './observable/mergemap/mergemap.component';
import { ConcatMapComponent } from './observable/concat-map/concat-map.component';
import { MobileNotificationComponent } from './observable/mobile-notification/mobile-notification.component';
import { SwitchmapComponent } from './observable/switchmap/switchmap.component';
import { SearchFunctionalityusingSwitchmapComponent } from './observable/search-functionalityusing-switchmap/search-functionalityusing-switchmap.component';
import { ExhaustmapComponent } from './observable/exhaustmap/exhaustmap.component';
import { CombineLatestComponent } from './observable/combineLatest/combineLatest.component';
import { ZipForkjoinComponent } from './observable/zip-forkjoin/zip-forkjoin.component';
import { ShareReplayComponent } from './observable/share-replay/share-replay.component';
import { CatcherrorThrowerrorComponent } from './observable/catcherror-throwerror/catcherror-throwerror.component';

const routes: Routes = [
  {path: 'promise', component: PromiseComponent},
  {path: 'observable', component: ObservableComponent, children: [
    {path: '', component: ListComponent},
    {path: 'fromEvent', component: FromEventComponent},
    {path: 'interval', component: IntervalComponent},
    {path: 'of-from', component: OfFromComponent},
    {path: 'toArray', component: ToArrayComponent},
    {path: 'custom', component: CustomComponent},
    {path: 'map', component: MapComponent},
    {path: 'pluck', component: PluckComponent},
    {path: 'filter', component: FilterComponent},
    {path: 'tap', component: TapComponent},
    {path: 'take', component: TakeComponent},
    {path: 'retry', component: RetryComponent},
    {path: 'debouncetime', component: DebouncetimeComponent},
    {path: 'subject', component: SubjectComponent},
    {path: 'replay-subject', component: ReplaySubjectComponent},
    {path: 'async-subject', component: AsyncSubjectComponent},
    {path: 'concat', component: ConcatComponent},
    {path: 'merge', component: MergeComponent},
    {path: 'mergemap', component: MergemapComponent},
    {path: 'concatmap', component: ConcatMapComponent},
    {path: 'mobileNotification', component: MobileNotificationComponent},
    {path: 'switchmap', component: SwitchmapComponent},
    {path: 'search-functionality', component: SearchFunctionalityusingSwitchmapComponent},
    {path: 'exhaustmap', component: ExhaustmapComponent},
    {path: 'shareReplay', component: ShareReplayComponent},
    {path: 'combineLatest', component: CombineLatestComponent},
    {path: 'zip-forkJoin', component: ZipForkjoinComponent},
    {path: 'catchError', component: CatcherrorThrowerrorComponent}
  ]},
  {path: '**', redirectTo: 'promise'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
