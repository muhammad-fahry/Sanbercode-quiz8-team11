describe('Shopping Cart Testing on Magento (with Login)', () => {
  beforeEach(() => {
      // Kunjungi halaman login
      cy.visit('https://magento.softwaretestingboard.com/customer/account/login/');
      
      // Masukkan kredensial login
      cy.get('#email').type('mfahry861@gmail.com'); // Ganti dengan email yang valid
      cy.get('#pass').type('Muhammad-fahry');       // Ganti dengan password yang valid
      
      // Klik tombol login
      cy.get('#send2').click();
      
      // Verifikasi login berhasil
      cy.get('.welcome').should('contain', 'Welcome');
  });

  it('Should add a product to the cart and proceed to checkout', () => {
      // Hover pada menu utama untuk memunculkan dropdown
      cy.get('a#ui-id-2') // Selector menu utama (contoh: Women)
        .trigger('mouseover'); // Aktifkan dropdown menu

      // Tunggu hingga submenu terlihat, lalu klik
      cy.get('a#ui-id-9') // Selector submenu (contoh: Tops -> Jackets)
        .should('be.visible') // Pastikan submenu terlihat
        .click();

      // Pilih produk pertama di kategori
      cy.get('.product-item-link').first().click();

      // Pilih ukuran dan warna produk
      cy.get('[data-option-label="M"]').click(); // Pilih ukuran berdasarkan label data
      cy.get('[data-option-label="Blue"]').click(); // Pilih warna berdasarkan label data

      // Tambahkan ke keranjang belanja
      cy.get('#product-addtocart-button').click();

      // Verifikasi produk berhasil ditambahkan
      cy.get('.message-success').should('contain', 'You added');

      // Buka keranjang belanja
      cy.get('.showcart').click();

      // Lanjutkan ke checkout
      cy.get('.action.primary.checkout').click();
  });

  it('Should navigate dropdown menus and select submenu automatically', () => {
      // Hover pada menu utama untuk memunculkan dropdown
      cy.get('a#ui-id-2') // Selector menu utama (contoh: Women)
        .trigger('mouseover'); // Aktifkan dropdown menu

      // Tunggu hingga submenu terlihat, lalu klik submenu secara otomatis
      cy.get('a#ui-id-9') // Selector submenu (contoh: Tops -> Jackets)
        .should('be.visible') // Pastikan submenu terlihat
        .click();

      // Verifikasi halaman submenu berhasil dimuat
      cy.url().should('include', 'women/tops-women');
  });
});
