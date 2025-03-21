import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { createComment } from '@/Redux/Comment/Action';
import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

const CreateCommentForm = ({ issueId }) => {
    const dispatch = useDispatch();
    const form = useForm({
        defaultValues: {
            content: "",
        },
    });

    const onSubmit = (data) => {
        dispatch(createComment({content:data.content, issueId}))

    };
    return (
        <div>
            <Form {...form}>
                <form className='flex gap-2' onSubmit={form.handleSubmit(onSubmit)}>
                    {/* Email Field */}
                    <FormField
                        control={form.control}
                        name="content"
                        render={({ field }) => (
                            <FormItem >
                                <div className='flex gap-2'>
                                    <div>
                                        <Avatar className="bg-gray-500">
                                            <AvatarFallback className="bg-transparent text-white">
                                                Y
                                            </AvatarFallback>
                                        </Avatar>
                                    </div>

                                    <FormControl>
                                        <Input
                                            {...field}
                                            type="text"
                                            className="w-[20rem]"
                                            placeholder="add a comment..."
                                        />
                                    </FormControl>
                                </div>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit">
                        save
                    </Button>
                </form>
            </Form>

        </div>
    )
}

export default CreateCommentForm