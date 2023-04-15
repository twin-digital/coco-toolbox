import * as cheerio from 'cheerio';
import * as request from 'request-promise';

type Bookshelf = {
  title: string,
  price: number,
  url: string,
  description: string
}

/**
 * Scrapes Amazon for bookshelves that are no taller than 5' in height
 * and returns an array of the five cheapest bookshelves along with their information
 */
export async function scrapeAmazon(): Promise<Bookshelf[]> {
  const url = 'https://www.amazon.com/s?k=bookshelves&rh=n%3A1069106&ref=nb_sb_noss_2';
  const html = await request.get(url);
  const $ = cheerio.load(html);

  const bookshelves: Bookshelf[] = [];

  $('h2.a-size-mini.a-spacing-none.a-color-base.s-line-clamp-2').slice(0, 5).each((i, el) => {
    const title = $(el).text().trim();
    const price = parseFloat($(el).closest('div').find('span.a-offscreen').eq(0).text().replace(/[^0-9.]/g, ''));
    const url = 'https://www.amazon.com' + $(el).find('a.a-link-normal.a-text-normal').attr('href');
    const description = $(el).closest('div').find('div.a-row.a-size-base.a-color-secondary.s-align-children-center').eq(0).text().trim();
    bookshelves.push({ title, price, url, description });
  });

  return bookshelves;
}