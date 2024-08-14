import connectToDB from '../../lib/utils';
import { Memoire } from "../../lib/models";
import { NextResponse } from 'next/server'
import path from 'path'
import fs from 'fs'

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(req) {
  try {
    const contentType = req.headers.get('content-type') || '';
    const boundary = contentType.split('; ').find((part) => part.startsWith('boundary='))?.replace('boundary=', '');
    
    if (!boundary) {
      return NextResponse.json({ error: 'Boundary not found' }, { status: 400 });
    }

    const formData = await req.formData();

    const annee = formData.get('annee');
    const file = formData.get('pdfFile');
    const intro = formData.get('intro');
    const niveau = formData.get('niveau');
    const specialite = formData.get('specialite');
    const theme = formData.get('theme');

    const tempPath = path.join(process.cwd(), 'public/memoFile', file.name);

    const buffer = Buffer.from(await file.arrayBuffer());

    fs.writeFileSync(tempPath, buffer);

    await connectToDB();

    const newMemoire = new Memoire({
      theme,
      niveau,
      specialite,
      annee,
      intro,
      pdfPath: `/memoFile/${file.name}`,
    });

    await newMemoire.save();

    return NextResponse.json({ message: 'Mémoire ajouté avec succès!' });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'Failed to create memoire!' }, { status: 500 });
  }
}
