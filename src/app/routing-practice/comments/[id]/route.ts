import { comments } from "../data";

type CommentType = {
    id: number;
    text: string;
} | undefined;

export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const comment: CommentType = comments.find((comment) => comment?.id === parseInt(id))
    return Response.json(comment)
}
export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const body = await request.json();
    const { text } = body;
    const comment: CommentType = comments.find((comment) => comment?.id === parseInt(id))
    if (comment) {
        comment.text = text
    }
    return Response.json(comments)
}

export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const index = comments.findIndex((comment) => comment.id === parseInt(id));
    comments.splice(index, 1);
    return Response.json(comments)
}