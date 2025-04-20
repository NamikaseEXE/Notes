import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/binary";

type Context = {
    params: {
      id: string
    }
  }

export async function GET(request: Request, { params }: Context) {
    try {
        const { id } = await params
        const note = await prisma.note.findFirst({
            where: {
                id: parseInt(id)
            }
        })
        if (!note) {
            return NextResponse.json({ error: "Note not found" }, { status: 404 });
        }
        return NextResponse.json(note);
    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }
    }
}

export async function DELETE(request: Request, params : {params : {id: string}}) {
    try {
        const { id } = await params.params
        const deletedNote = await prisma.note.delete({
            where: {
                id: parseInt(id)
            }
        })
        if (!deletedNote) {
            return NextResponse.json({ error: "Note not found" }, { status: 404 });
        }
        return NextResponse.json(deletedNote);
    } catch (error) {
        if (error instanceof PrismaClientKnownRequestError) {
            if (error.code === "P2025") {
                return NextResponse.json({ error: "Note not found" }, { status: 404 });
            }
            return NextResponse.json({ error: error.message }, { status: 500 });
        }
        return NextResponse.json({ error: "Note not found" }, { status: 404 });
    }
}

export async function PUT(request: Request, params : {params : {id: string}}) {
    try {
    const { title, content } = await request.json();
    const { id } = await params.params
    const updatedNote = await prisma.note.update({
        where: {
            id: parseInt(id)
        },
        data: {
            title,
            content
        }
    })
    if (!updatedNote) {
        return NextResponse.json({ error: "Note not found" }, { status: 404 });
    }
    return NextResponse.json(updatedNote);
    } catch (error) {
        if (error instanceof PrismaClientKnownRequestError) {
            if (error.code === "P2025") {
                return NextResponse.json({ error: "Note not found" }, { status: 404 });
            }
            return NextResponse.json({ error: error.message }, { status: 500 });
        }
        return NextResponse.json({ error: "Note not found" }, { status: 404 });
    }
}