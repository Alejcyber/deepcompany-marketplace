import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let image: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();

    image = document.createElement('img');
    image.id = 'logoimg';
    document.body.appendChild(image);
  });

  afterEach(() => {
    document.body.removeChild(image);
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should load the image from a remote URL correctly', (done) => {

    image.src = 'https://dfxpzlr5516xz.cloudfront.net/wp-content/uploads/2018/08/logo2.png';

    image.onload = () => {
      expect(image.complete).toBeTrue();
      done();
    };
  });

});
