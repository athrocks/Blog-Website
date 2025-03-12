import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, RTE, Select } from "../";
import appwriteService from "../../appwrite/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PostForm({ post }) {
  const { register, handleSubmit, watch, setValue, control, getValues } =
    useForm({
      defaultValues: {
        title: post?.title || "",
        slug: post?.$id || "",
        content: post?.content || "",
        status: post?.status || "active",
      },
    });

  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);

  const submit = async (data) => {
    const file = data.image?.[0]
      ? await appwriteService.uploadFile(data.image[0])
      : null;
    if (file && post) appwriteService.deleteFile(post.featuredImage);

    const dbPost = post
      ? await appwriteService.updatePost(post.$id, {
          ...data,
          featuredImage: file ? file.$id : undefined,
        })
      : await appwriteService.createPost({
          ...data,
          userId: userData.$id,
          featuredImage: file?.$id,
        });

    if (dbPost) navigate(`/post/${dbPost.$id}`);
  };

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="grid grid-cols-1 md:grid-cols-3 gap-6"
    >
      <div className="md:col-span-2 space-y-4">
        <Input
          label="Title"
          placeholder="Title"
          {...register("title", { required: true })}
        />
        <Input
          label="Slug"
          placeholder="Slug"
          {...register("slug", { required: true })}
        />
        <RTE
          label="Content"
          name="content"
          control={control}
          defaultValue={getValues("content")}
        />
      </div>

      <div className="space-y-4">
        <Input
          label="Featured Image"
          type="file"
          accept="image/*"
          {...register("image", { required: !post })}
        />
        {post && (
          <img
            src={appwriteService.getFilePreview(post.featuredImage)}
            alt={post.title}
            className="rounded-lg"
          />
        )}
        <Select
          options={["active", "inactive"]}
          label="Status"
          {...register("status", { required: true })}
        />
        <Button type="submit" className="w-full">
          {post ? "Update" : "Submit"}
        </Button>
      </div>
    </form>
  );
}
