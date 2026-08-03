import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroEleitores } from './cadastro-eleitores';

describe('CadastroEleitores', () => {
  let component: CadastroEleitores;
  let fixture: ComponentFixture<CadastroEleitores>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroEleitores],
    }).compileComponents();

    fixture = TestBed.createComponent(CadastroEleitores);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
