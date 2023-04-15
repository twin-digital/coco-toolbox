import request from 'request';
import cheerio from 'cheerio';

/**
 * Scrapes Amazon for bookshelves no taller than 5' in height and returns an array of the five cheapest results.
 * @returns Promise of an array of bookshelf objects, each with the following properties:
 *  - title: string
 *  - price: number
 *  - url: string
 *  - description: string
 */
async function scrapeAmazon() {
  const url = 'https://www.amazon.com/s?k=bookshelves&rh=n%3A1069106&ref=nb_sb_noss_2';
  const response = await new Promise<string>((resolve, reject) => {
    request(url, (err, res, body) => {
      if (err) reject(err);
      else resolve(body);
    });
  });

  const $ = cheerio.load(response);

  const bookshelves = [];

  $('.a-section.a-text-center .a-size-mini.a-spacing-none.a-color-base.s-line-clamp-2').slice(0, 5).each((i, el) => {
    const title = $(el).text().trim();
    const priceStr = $(el).closest('.sg-col.sg-col-4-of-12.sg-col-8-of-16.sg-col-12-of-20').next('.sg-col.sg-col-4-of-12.sg-col-8-of-16.sg-col-12-of-20').find('.a-offscreen').text().trim();
    const price = parseFloat(priceStr.replace(',', ''));
    const url = 'https://amazon.com' + $(el).closest('.s-result-item').find('.s-image-square-aspect img').parent().attr('href').trim();
    const description = $(el).closest('.sg-col.sg-col-4-of-12.sg-col-8-of-16.sg-col-12-of-20').next('.sg-col.sg-col-4-of-12.sg-col-8-of-16.sg-col-12-of-20').find('.a-row.a-size-base.a-color-secondary.s-align-children-center').text().trim();

    bookshelves.push({ title, price, url, description });
  });

  return bookshelves;
}

export { scrapeAmazon };