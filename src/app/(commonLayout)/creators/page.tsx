import { Creator } from '@/app/features/courses/types/course.type';
import CreatorSearchBar from '@/app/features/creators/components/CreatorSearchBar'
import CreatorsList from '@/app/features/creators/components/CreatorsList';
import getAllCreators from '@/app/features/creators/service/getAllCreators.service';
import React from 'react'

export default async function CreatorsPage() {

    // Get all creators list
    const creatorsList: Creator[] = await getAllCreators();

    return (
        <div>
            <CreatorSearchBar />
            <CreatorsList creatorsList={creatorsList} />
        </div>
    )
}
