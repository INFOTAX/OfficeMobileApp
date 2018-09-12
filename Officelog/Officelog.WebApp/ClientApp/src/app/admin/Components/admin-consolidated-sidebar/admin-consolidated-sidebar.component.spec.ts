import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminConsolidatedSidebarComponent } from './admin-consolidated-sidebar.component';

describe('AdminConsolidatedSidebarComponent', () => {
  let component: AdminConsolidatedSidebarComponent;
  let fixture: ComponentFixture<AdminConsolidatedSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminConsolidatedSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminConsolidatedSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
