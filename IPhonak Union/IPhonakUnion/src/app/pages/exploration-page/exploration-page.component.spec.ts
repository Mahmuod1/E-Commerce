import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplorationPageComponent } from './exploration-page.component';

describe('ExplorationPageComponent', () => {
  let component: ExplorationPageComponent;
  let fixture: ComponentFixture<ExplorationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExplorationPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExplorationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
