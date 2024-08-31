
import { LitElement, html, css } from 'lit';

class CategComponent extends LitElement {
  constructor() {
    super();
    this.selectedCategory = ''; // بديل لـ @property
  }

  static styles = css`
    
.dropdown:hover .dropdown-menu {
  display: flex;
}
.dropdown-menu-hadi li {
  font-weight:bold;
font-size: 1.2em;

}

.dropdown-submenu:hover > .dropdown-menu {
    top: 0;
    left: 100%;
    margin-top: -1px;
}
.dropdown-menu ul{
  list-style: none;
  padding: 0%;
}
.navbar-nav {
  display: flex;
  flex-direction: column;
}

.nav-item {
  margin-bottom: 10px;
}
.dropdown-menu {
  left: 100%;
  top: 0;
  transform: translateX(0);
  margin-left: 0;
}
.dropdown-container {
  display: flex;
  gap: 5px;
}

.nav-item .dropdown-menu {
  left: 100%;
  top: 0;
  transform: translateX(0);
  margin-left: 0;
}

.nav-item.dropdown {
  margin: 0;
}
.dropdown-item-hadi {
  font-size: 1.1rem;
  font-weight: bold;
  color: #000;
  border-bottom: 2px  #000;
  margin-bottom: 10px;
  padding: 5px 0;
}

ul.list-unstyled {
  padding-left: 20px;
  margin-bottom: 20px;
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
}

ul.list-unstyled li {
  margin-bottom: 10px;
}

.dropdown-item {
  font-size: 1.1rem;
  color: #333;
  padding: 5px 10px;
  transition: color 0.3s ease, background-color 0.3s ease;
}

.dropdown-item:hover {
  color:deepskyblue;
  background-color: #f8f9fa;
}




  `;

  render() {
    return html`
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div class="dropdown-container tasneef" style="font-weight: bold;">
          <span class="main-category">تصنيفات المنتجات</span>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">

          <!-- Dropdown for Super Dails -->
          <li class="nav-item dropdown">
            <a class="nav-link"   role="button" data-bs-toggle="dropdown" aria-expanded="false" @click="${() => this.onCategorySelected('beauty')}">
            <i class="bi bi-bag" ></i>Super Dails
            </a>
          </li>

          <!-- Dropdown for Shoes -->
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle"   role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <i class="bi bi-cart"></i>  أحذية
            </a>
            <div class="dropdown-menu">
              <ul class="list-unstyled">
                <li><a class="dropdown-item-hadi"  >أحذية رجالية</a></li>
                <li><a class="dropdown-item" role="button" @click="${() => this.onCategorySelected('beauty')}">>رياضي</a></li>
                <li><a class="dropdown-item"role="button" @click="${() => this.onCategorySelected('furniture')}">رسمية وكلاسيكية</a></li>
                <li><a class="dropdown-item"role="button"  >بساطير</a></li>
                <li><a class="dropdown-item"role="button" >كاجوال</a></li>
                <li><a class="dropdown-item"role="button" >توب سايدر</a></li>
                <li><a class="dropdown-item"role="button" >أحذية طبية رجالية</a></li>
                <li><a class="dropdown-item"role="button" >صنادل وشباشب للرجال</a></li>
              </ul>
              <ul class="list-unstyled">
                <li><a class="dropdown-item-hadi"role="button" >أحذية نسائية</a></li>
                <li><a class="dropdown-item"role="button" >أحذية رياضية</a></li>
                <li><a class="dropdown-item"role="button" >جزم وبساطير</a></li>
                <li><a class="dropdown-item"role="button" >روكي وكعب</a></li>
                <li><a class="dropdown-item"role="button" >أحذية طبية</a></li>
                <li><a class="dropdown-item"role="button" >باليه وزحاف</a></li>
                <li><a class="dropdown-item"role="button" >كاجوال</a></li>
                <li><a class="dropdown-item"role="button" >صنادل وشباشب للصبايا</a></li>
              </ul>
              <ul class="list-unstyled">
                <li><a class="dropdown-item-hadi"role="button"  >أحذيةأطفال</a></li>
              </ul>
            </div>
          </li>

          <!-- Dropdown for Clothes -->
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle"   role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <i class="bi bi-person-standing-dress"role="button"></i>  الملابس
            </a>
            <div class="dropdown-menu">
              <ul class="list-unstyled">
                <li><a class="dropdown-item-hadi" role="button" >ملابس رجالية</a></li>
                <li><a class="dropdown-item"role="button"  >بناطيل جينز</a></li>
                <li><a class="dropdown-item"role="button"  >بناطيل كاجوال</a></li>
                <li><a class="dropdown-item"role="button"  >بناطيل رياضية</a></li>
                <li><a class="dropdown-item"role="button"  >شورتات</a></li>
                <li><a class="dropdown-item"role="button"  >قمصان</a></li>
                <li><a class="dropdown-item"role="button"  >تيشرتات</a></li>
                <li><a class="dropdown-item"role="button"  >بلايز خريفي ربيعي</a></li>
                <li><a class="dropdown-item"role="button"  >بلايز شتوية</a></li>
                <li><a class="dropdown-item"role="button"  >جاكيتات ومعاطف</a></li>
                <li><a class="dropdown-item"role="button"  >بيجامات</a></li>
                <li><a class="dropdown-item"role="button"  >ملابس رياضية</a></li>
                <li><a class="dropdown-item"role="button"  >ملابس داخلية</a></li>
              </ul>
              <ul class="list-unstyled">
                <li><a class="dropdown-item-hadi"role="button"  >ملابس نسائية</a></li>
                <li><a class="dropdown-item"role="button"  >الملابس الداخلية</a></li>
                <li><a class="dropdown-item"role="button"  >ملابس بيتية</a></li>
                <li><a class="dropdown-item"role="button"  >بيجامات</a></li>
                <li><a class="dropdown-item"role="button"  >جاكيتات ومعاطف</a></li>
                <li><a class="dropdown-item"role="button"  >بلايز وقمصان</a></li>
                <li><a class="dropdown-item"role="button"  >بناطيل نسائية</a></li>
                <li><a class="dropdown-item"role="button"  >عبايات</a></li>
                <li><a class="dropdown-item"role="button"  >فساتين وأطقم</a></li>
              </ul>
            </div>
          </li>

          <!-- Dropdown for Perfumes -->
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle"   role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <i class="bi bi-luggage-fill"role="button"></i>  عطور
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" role="button" >عطور رجالية</a></li>
              <li><a class="dropdown-item" role="button" >عطور نسائية</a></li>
              <li><a class="dropdown-item" role="button" >عطور للشعر</a></li>
              <li><a class="dropdown-item" role="button" >معطرات الجو والفراش</a></li>
              <li><a class="dropdown-item" role="button" >بخور</a></li>
              <li><a class="dropdown-item" role="button" >معطرات الجسم ومزيل العرق</a></li>
            </ul>
          </li>

          <!-- Dropdown for Beauty Department -->
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle"   role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <i class="bi bi-heart"></i>  قسم الجمال
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item"  >مكياج الوجه و العناية بالبشرة </a></li>
              <li><a class="dropdown-item"  > مكياج العيون</a></li>
              <li><a class="dropdown-item"  >مكياج الشفاه</a></li>
              <li><a class="dropdown-item"  >العناية بالشعر</a></li>
              <li><a class="dropdown-item"  >العناية بالاظافر</a></li>
              <li><a class="dropdown-item"  >العناية بالجسم</a></li>

            </ul>
          </li>

          <!--  Dropdown for watches-->
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle"   role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <i class="bi bi-watch"role="button"></i>  ساعات
            </a>
            <div class="dropdown-menu">
              <ul class="list-unstyled">
                <li><a class="dropdown-item-hadi"role="button"  > ساعات رجالية</a></li>
                <li><a class="dropdown-item"role="button"  >ساعات جلدية</a></li>
                <li><a class="dropdown-item"role="button"  > ساعات معدنية</a></li>

              </ul>
              <ul class="list-unstyled">
                <li><a class="dropdown-item-hadi"role="button"  >ساعات نسائية</a></li>
                <li><a class="dropdown-item"role="button"  > ساعات جلدية </a></li>
                <li><a class="dropdown-item"role="button"  > ساعات معدنية</a></li>

              </ul>

            </div>
          </li>
          <!-- Dropdown for Electronics -->

          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle"   role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <i class="bi bi-tv"role="button"></i>  الكترونيات
            </a>
            <div class="dropdown-menu">
              <ul class="list-unstyled">
                <li><a class="dropdown-item-hadi"role="button"  >موبايلات واجهزة لوحية</a></li>
                <li><a class="dropdown-item"role="button"  > SAMSUNG </a></li>
                <li><a class="dropdown-item"role="button"  > iPhone </a></li>
                <li><a class="dropdown-item"role="button"  > Xiaomi</a></li>
                <li><a class="dropdown-item"role="button"  > NOKIA </a></li>
                <li><a class="dropdown-item"role="button"  > Oppo </a></li>
                <li><a class="dropdown-item"role="button"  > Realme </a></li>
                <li><a class="dropdown-item"role="button"  > اكسسوارات الهواتف </a></li>


              </ul>
              <ul class="list-unstyled">
                <li><a class="dropdown-item-hadi"role="button"   > لابتوب وكمبيوتر </a></li>
                <li><a class="dropdown-item"role="button"  >  اكسسوارات الكومبيوتر </a></li>
              </ul>

              <ul class="list-unstyled">
                <li><a class="dropdown-item"role="button"   > سماعات</a></li>
                </ul>
              <ul class="list-unstyled">
                <li><a class="dropdown-item "role="button"  >  اكسسوارات اخرى </a></li>
              </ul>

            </div>
          </li>
          <!-- Dropdown for Bags and Accessories -->

          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle"   role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <i class="bi bi-briefcase"role="button"></i>  شنط واكسسوارات
            </a>
            <ul class="dropdown-menu">
              <ul>
              <li><a class="dropdown-item"role="button"  > اكسسوارات رجال</a></li>
              <li><a class="dropdown-item"role="button"  > حقائب مدرسية</a></li>
            </ul>
            <ul>
              <li><a class="dropdown-item"role="button"  > قرطاسية</a></li>
              <li><a class="dropdown-item"role="button"  > محافظ رجالية</a></li>
            </ul>
            <ul>
              <li><a class="dropdown-item"role="button"  > شنط لابتوب</a></li>
              <li><a class="dropdown-item"role="button"  > شنط كتف</a></li>
            </ul>
            <ul>
              <li><a class="dropdown-item"role="button"  > اكسسوارات للنساء</a></li>
              <li><a class="dropdown-item"role="button"  > نظارات شمسية و عدسات لاصقة</a></li>
              <li><a class="dropdown-item"role="button"  > طواقي</a></li>
            </ul>
            </ul>

          </li>

          <!-- Dropdown for paly and child -->
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle"   role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <i class="bi bi-trophy"role="button"></i>  الاطفال والالعاب
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item"role="button"  >الالعاب </a></li>
              <li><a class="dropdown-item"role="button"  > مستلزمات الاطفال والبيبي</a></li>

            </ul>
          </li>

                  <!-- Dropdown for Sports and Health -->

          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle"   role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <i class="bi bi-universal-access"role="button"></i>  الرياضة والصحة
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" role="button" >مشدات واحزمة طبية </a></li>

            </ul>
          </li>
          <!-- Dropdown for  Home -->

          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle"   role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <i class="bi bi-houses-fill"role="button"></i>  المنزل والحديقة
            </a>
            <div class="dropdown-menu">
              <ul class="list-unstyled">
                <li><a class="dropdown-item-hadi"role="button"  >مفروشات  </a></li>
                <li><a class="dropdown-item"role="button"  > ستائر وبرادي </a></li>
                <li><a class="dropdown-item"role="button"  > مستلزمات واكسسوارات </a></li>
                <li><a class="dropdown-item"role="button"  > الحمام</a></li>
                <li><a class="dropdown-item"role="button"  > مناشف وبشاكير </a></li>
                <li><a class="dropdown-item"role="button"  > كراسي و طاولات </a></li>
                <li><a class="dropdown-item"role="button"  > بطانيات و أغطية أسرة </a></li>
                <li><a class="dropdown-item"role="button"  > رفوف وديكورات منزلية </a></li>
                <li><a class="dropdown-item"role="button"  > سلات </a></li>



              </ul>
              <ul class="list-unstyled">
                <li><a class="dropdown-item-hadi"role="button"  > الانارة </a></li>
                <li><a class="dropdown-item"role="button"  > ثريات </a></li>
                <li><a class="dropdown-item" role="button" > إنارة خارجية </a></li>
                <li><a class="dropdown-item"role="button"  > إنارة جانبية داخلي </a></li>
                <li><a class="dropdown-item"role="button"  > سبتات </a></li>
                <li><a class="dropdown-item"role="button"  > جلوبات </a></li>
                <li><a class="dropdown-item"role="button"  > أحبال إنارة </a></li>
                <li><a class="dropdown-item"role="button"  > كشافات </a></li>
                <li><a class="dropdown-item"role="button"  > نيونات ستاند إنارة </a></li>


              </ul>

              <ul class="list-unstyled">
                <li><a class="dropdown-item"role="button"   > الأدوات المنزلية</a></li>
                <li><a class="dropdown-item"role="button"   > مستلزمات التنظيف</a></li>
                </ul>

                  <ul class="list-unstyled">
                    <li><a class="dropdown-item"role="button"   > أدوات و مستلزمات للمطبخ</a></li>
                    <li><a class="dropdown-item"role="button"   > اكسسوارات مكتبية</a></li>
                    </ul>

                    <ul class="list-unstyled">
                      <li><a class="dropdown-item"role="button"   >  مستلزمات الحيوانات  </a></li>
                      <li><a class="dropdown-item"role="button"   >  منتجات الحديقة </a></li>
                      </ul>
                      <ul class="list-unstyled">
                        <li><a class="dropdown-item"role="button"   > اكسسوارات المنزل </a></li>
                        </ul>


            </div>
          </li>


          <li class="nav-item dropdown">
            <a class="nav-link "   role="button"  aria-expanded="false">
              <i class="bi bi-tools"role="button"></i>  معدات صناعية
            </a>
          </li>


          <li class="nav-item dropdown">
            <a class="nav-link "   role="button"  aria-expanded="false">
              <i class="bi bi-car-front"role="button"></i>  اكسسوارات السيارات
            </a>
          </li>

          <!-- Dropdown for Books and Stationery -->
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle"   role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <i class="bi bi-book-half"role="button"></i>  كتب وروايات
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item"role="button"  > كتب تعليمية</a></li>
              <li><a class="dropdown-item"role="button"  > روايات وقصص</a></li>

            </ul>
          </li>

        </ul>
      </div>
    </div>
  </div>
  </nav>

    `;
  }

  onCategorySelected(category) {
    this.selectedCategory = category;
    this.dispatchEvent(new CustomEvent('category-selected', {
      detail: { category },
      bubbles: true,
      composed: true
    }));
  }
}

customElements.define('app-categ', CategComponent);
