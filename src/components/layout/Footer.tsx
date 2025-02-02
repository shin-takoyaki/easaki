function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-lg font-bold mb-2">株式会社エアサキ</p>
            <p className="text-sm text-gray-400">
              〒064-0809 北海道札幌市中央区南九条西6丁目2番18-105号
            </p>
            <p className="text-sm text-gray-400 mt-4">
              &copy; {new Date().getFullYear()} Airsaki Corporation. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;